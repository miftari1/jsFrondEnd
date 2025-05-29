let host = 'http://localhost:3030/jsonstore/expeditions';

let loadBtn = document.getElementById('load-expeditions');
loadBtn.addEventListener('click', showExpeditions);

let addBtn = document.getElementById('add-expedition');
addBtn.addEventListener('click', onAdd);

let editBtn = document.getElementById('edit-expedition');
editBtn.addEventListener('click', onEdit);

let islandField = document.getElementById('island');
let locationField = document.getElementById('location');
let dateField = document.getElementById('date');

async function showExpeditions() {
    let expeditions = await getAllExpeditions();
    let list = document.getElementById('expedition-list');

    list.replaceChildren('');

    for (let expedition of expeditions) {
        let element = document.createElement('div');
        element.className = 'expedition-scroll';

        let content = document.createElement('div');
        content.className = 'content';

        let islandPara = document.createElement('p');
        islandPara.textContent = `${expedition.island}`;
        content.appendChild(islandPara);

        
        let locationPara = document.createElement('p');
        locationPara.textContent = `${expedition.location}`;
        content.appendChild(locationPara);

        
        let datePara = document.createElement('p');
        datePara.textContent = `${expedition.date}`;
        content.appendChild(datePara);

        element.appendChild(content);

        let btnContainer = document.createElement('div');
        btnContainer.className = 'buttons-container';

        let changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.className = 'change-btn';
        changeBtn.addEventListener('click', () => onChange(element, expedition));
        btnContainer.appendChild(changeBtn);

        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', async () => {
            await deleteExpedition(expedition._id);
            showExpeditions();
        });
        btnContainer.appendChild(deleteBtn);

        element.appendChild(btnContainer);
        list.appendChild(element);


        editBtn.disabled = true;
    }
}

async function onAdd(e) {
    e.preventDefault();

    if (!islandField.value || !locationField.value || !dateField.value) {
        return;
    }

    await addExpedition(islandField.value, locationField.value, dateField.value);

    islandField.value = '';
    locationField.value = '';
    dateField.value = '';

    showExpeditions();
}

async function onChange(element, record) {
    let list = document.getElementById('expedition-list');
    list.removeChild(element);

    islandField.value = record.island;
    locationField.value = record.location;
    dateField.value = record.date;

    editBtn.dataset.id = record._id;
    editBtn.disabled = false;
    addBtn.disabled = true;

}

async function onEdit(e) {
    e.preventDefault();

    let id = editBtn.dataset.id;

    await editExpedition(id, islandField.value, locationField.value, dateField.value);

    islandField.value = '';
    locationField.value = '';
    dateField.value = '';

    addBtn.disabled = false;
    editBtn.disabled = true;
    editBtn.dataset.id = '';

    showExpeditions();
}

async function getAllExpeditions() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function addExpedition(island, location, date) {
    let record = {
        island,
        location,
        date
    };

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    await fetch(host, options);
}

async function editExpedition(id, island, location, date) {
    let record = {
        _id: id,
        island,
        location,
        date
    };

    let options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    await fetch(`${host}/${id}`, options);
}

async function deleteExpedition(id) {
    let options = {
        method: 'delete'
    };

    await fetch(`${host}/${id}`, options);
}