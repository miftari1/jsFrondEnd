let host = 'http://localhost:3030/jsonstore/orders';

let loadBtn = document.getElementById('load-orders');
loadBtn.addEventListener('click', showOrders);

let createBtn = document.getElementById('order-btn');
createBtn.addEventListener('click', onCreate);

let editBtn = document.getElementById('edit-order');
editBtn.addEventListener('click', onEdit);

let nameField = document.getElementById('name');
let quantityField = document.getElementById('quantity');
let dateField = document.getElementById('date');

async function getAllOrders() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();

    return Object.values(data);
}

async function createOrder(name, date, quantity) {
    let newOrder = {
        name,
        date,
        quantity
    };

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)
    };

    await fetch(host, options);

    showOrders();
}

async function onCreate(e) {
    e.preventDefault();

    await createOrder(nameField.value, dateField.value, quantityField.value);

    nameField.value = '';
    dateField.value = '';
    quantityField.value = '';

    showOrders();
}

async function onChange(element, record) {
    let list = document.getElementById('list');

    list.removeChild(element);
    nameField.value = record.name;
    dateField.value = record.date;
    quantityField.value = record.quantity;

    editBtn.disabled = false;
    editBtn.dataset.id = record._id;

    createBtn.disabled = true;
}

async function onEdit(e) {
    e.preventDefault();

    let name = nameField.value;
    let date = dateField.value;
    let quantity = quantityField.value;

    if (!name || !date || !quantity) {
        return;
    }

    let id = editBtn.dataset.id;

    let edited = {
        name,
        date,
        quantity
    }

    edited._id = id;

    let options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(edited)
    };

    await fetch(`${host}/${id}`, options);

    nameField.value = '';
    dateField.value = '';
    quantityField.value = '';

    editBtn.disabled = true;
    editBtn.dataset.id = '';

    createBtn.disabled = false;

    showOrders();
}

async function onDone(id) {
    let options = {
        method: 'delete'
    }

    await fetch(`${host}/${id}`, options);

    showOrders();
}

async function showOrders() {
    let orders =  await getAllOrders();
    let list = document.getElementById('list');

    list.replaceChildren('');

    for (let order of orders) {
        let list = document.getElementById('list');
        let container = document.createElement('div');
        container.className = 'container';

        let name = document.createElement('h2');
        name.textContent = `${order.name}`;
        container.appendChild(name);

        let date = document.createElement('h3');
        date.textContent = `${order.date}`;
        container.appendChild(date);

        let quantity = document.createElement('h3');
        quantity.textContent = `${order.quantity}`;
        container.appendChild(quantity);

        let changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', () => onChange(container, order));
        container.appendChild(changeBtn);
        
        let doneBtn = document.createElement('button');
        doneBtn.className = 'done-btn';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => onDone(order._id));
        container.appendChild(doneBtn);

        list.appendChild(container);
    }
}