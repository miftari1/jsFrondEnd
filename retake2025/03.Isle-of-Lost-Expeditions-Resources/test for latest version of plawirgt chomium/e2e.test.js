const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)

const DEBUG = false;
const slowMo = 500;

const mockData = {
  list: [
    {
      island: 'Test 1',
      location: 'M',
      date: '1902-02-03',
      _id: '1001',
    },
    { island: 'Test 2',
      location: 'N',
      date: '1902-04-03',
      _id: '1002',
    },
    {
      island: 'Test 3',
      location: 'P',
      date: '1902-06-03',
      _id: '1003',
    },
    {
      island: 'Test 4',
      location: 'F',
      date: '1902-02-09',
      _id: '1004',
    },
  ],
};

const endpoints = {
  catalog: '/jsonstore/expeditions',
  byId: (id) => `/jsonstore/expeditions/${id}`,
};

let browser;
let context;
let page;

describe('E2E tests', function () {
  // Setup
  this.timeout(DEBUG ? 120000 : 7000);
  before(
    async () =>
    (browser = await chromium.launch(
      DEBUG ? { headless: false, slowMo } : {}
    ))
  );
  after(async () => await browser.close());
  beforeEach(async () => {
    context = await browser.newContext();
    setupContext(context);
    page = await context.newPage();
  });
  afterEach(async () => {
    await page.close();
    await context.close();
  });

  describe('Isle of Lost Expeditions Tests', () => {
    it('Load Expeditions', async () => {
      const data = mockData.list;
      const { get } = await handle(endpoints.catalog);
      get(data);

      await page.goto(host);
      await page.waitForSelector('#load-expeditions');

      await page.click('#load-expeditions');

      const list = await page.$$eval(`#expeditions #expedition-list .expedition-scroll`, (t) =>
        t.map((s) => s.textContent)
      );
      expect(list.length).to.equal(data.length);

    });

   it('Add Expedition', async () => {
      const data = mockData.list[0];
      await page.goto(host);

      const { post } = await handle(endpoints.catalog);
      const { onRequest } = post();

      await page.waitForSelector('#form');
      await page.fill('#island', data.island);
      await page.fill('#location', data.location);
      await page.fill('#date', data.date);

      const [request] = await Promise.all([
        onRequest(),
        page.click('#add-expedition'),
      ]);

      const postData = JSON.parse(request.postData());
      
      expect(postData.island).to.equal(data.island);
      expect(postData.location).to.equal(data.location);
      expect(postData.date).to.equal(data.date);

      const [island] = await page.$$eval(`#island`, (t) =>
        t.map((s) => s.value)
      );
      const [location] = await page.$$eval(`#location`, (t) =>
        t.map((s) => s.value)
      );

      const [date] = await page.$$eval(`#date`, (t) =>
        t.map((s) => s.value)
      );

      expect(island).to.equal('');
      expect(location).to.equal('');
      expect(date).to.equal('');
    });

    it('Edit Expedition (Has Input)', async () => {
      await page.goto(host);
      const data = mockData.list[0];

      await page.click('#load-expeditions');
      await page.waitForSelector('#expedition-list');
      await page.click('#expedition-list .expedition-scroll .change-btn');

      const allCourse = await page.$$eval(`#form input`, (t) =>
        t.map((s) => s.value)
      );

   

      expect(allCourse[0]).to.include(data.island);
      expect(allCourse[1]).to.include(data.location);
      expect(allCourse[2]).to.include(data.date);

    });

    it('Edit Expedition (Makes API Call)', async () => {
      const data = mockData.list[0];
      await page.goto(host);
      const { patch } = await handle(endpoints.byId(data._id));
      const { onRequest } = patch({ id: data._id });

      await page.click('#load-expeditions');
      await page.waitForSelector('#expedition-list');
      await page.click('#expedition-list .expedition-scroll .change-btn');
      await page.fill('#island', data.island + '2');

      const [request] = await Promise.all([
        onRequest(),
        page.click('#edit-expedition'),
      ]);

      const postData = JSON.parse(request.postData());
      expect(postData.island).to.equal(data.island + '2');
    });

    it('Delete Expedition', async () => {
      const data = mockData.list[0];
      await page.goto(host);
      const { del } = await handle(endpoints.byId(data._id));
      const { onResponse, isHandled } = del({ id: data._id });

      await page.click('#load-expeditions');

      await page.waitForSelector('#expedition-list');

      await Promise.all([
        onResponse(),
        page.click(
          `#expedition-list .expedition-scroll .delete-btn`
        ),
      ]);

      expect(isHandled()).to.be.true;
    });
  });
});

async function setupContext(context) {
  // Block external calls
  await context.route(
    (url) => url.href.slice(0, host.length) != host,
    (route) => {
      if (DEBUG) {
        console.log('Preventing external call to ' + route.request().url());
      }
      route.abort();
    }
  );
  await handleContext(context, endpoints.byId('1001'), {

    get: mockData.list[0],
 
  });

  await handleContext(context, endpoints.catalog, { post: mockData.list[0] });
 
  // Catalog and Details
 
  await handleContext(context, endpoints.catalog, { get: mockData.list });
}

function handle(match, handlers) {
  return handleRaw.call(page, match, handlers);
}

function handleContext(context, match, handlers) {
  return handleRaw.call(context, match, handlers);
}

async function handleRaw(match, handlers) {
  const methodHandlers = {};
  const result = {
    get: (returns, options) => request('GET', returns, options),
    get2: (returns, options) => request('GET', returns, options),
    post: (returns, options) => request('POST', returns, options),
    put: (returns, options) => request('PUT', returns, options),
    patch: (returns, options) => request('PATCH', returns, options),
    del: (returns, options) => request('DELETE', returns, options),
    delete: (returns, options) => request('DELETE', returns, options),
  };

  const context = this;

  await context.route(urlPredicate, (route, request) => {
    if (DEBUG) {
      console.log('>>>', request.method(), request.url());
    }

    const handler = methodHandlers[request.method().toLowerCase()];
    if (handler == undefined) {
      route.continue();
    } else {
      handler(route, request);
    }
  }); ``

  if (handlers) {
    for (let method in handlers) {
      if (typeof handlers[method] == 'function') {
        handlers[method](result[method]);
      } else {
        result[method](handlers[method]);
      }
    }
  }

  return result;

  function request(method, returns, options) {
    let handled = false;

    methodHandlers[method.toLowerCase()] = (route, request) => {
      handled = true;
      route.fulfill(respond(returns, options));
    };

    return {
      onRequest: () => context.waitForRequest(urlPredicate),
      onResponse: () => context.waitForResponse(urlPredicate),
      isHandled: () => handled,
    };
  }

  function urlPredicate(current) {
    if (current instanceof URL) {
      return current.href.toLowerCase().includes(match.toLowerCase());
    } else {
      return current.url().toLowerCase().includes(match.toLowerCase());
    }
  }
}

function respond(data, options = {}) {
  options = Object.assign(
    {
      json: true,
      status: 200,
    },
    options
  );

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  if (options.json) {
    headers['Content-Type'] = 'application/json';
    data = JSON.stringify(data);
  }

  return {
    status: options.status,
    headers,
    body: data,
  };
}