let host = 'http://localhost:3030/jsonstore/reservations';

let loadBtn = document.getElementById('load-history');
loadBtn.addEventListener('click', showReservations);

let addBtn = document.getElementById('add-reservation');
addBtn.addEventListener('click', onAdd);

let editBtn = document.getElementById('edit-reservation');
editBtn.addEventListener('click', onEdit);

async function showReservations() {
    let data = await getAllReservations();

    editBtn.disabled = true;
    
    let list = document.getElementById('list');
    list.replaceChildren();

    for (let reservation of data) {
        let container = document.createElement('div');
        container.className = 'container';

        let resNames = document.createElement('h2');
        resNames.textContent = `${reservation.names}`;

        let resDate = document.createElement('h3');
        resDate.textContent = `${reservation.date}`;

        let resDays = document.createElement('h3');
        resDays.textContent = `${reservation.days}`;

        let btnContainer = document.createElement('div');
        btnContainer.className = 'buttons-container';

        let changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.className = 'change-btn';
        changeBtn.addEventListener('click', () => onChange(reservation, container));

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', async () => {
            await deleteReservation(reservation._id);
            showReservations();
        });

        btnContainer.appendChild(changeBtn);
        btnContainer.appendChild(deleteBtn);

        container.appendChild(resNames);
        container.appendChild(resDate);
        container.appendChild(resDays);
        container.appendChild(btnContainer);
        list.appendChild(container);
    }
}

async function getAllReservations() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function addReservation(names, days, date) {
    let reservation = {
        names,
        days,
        date
    };

    let options = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reservation)
    }

    await fetch(host, options);
}

async function onAdd() {
    let names = document.getElementById('names');
    let days = document.getElementById('days');
    let date = document.getElementById('date');

    if (!names.value || !days.value || !date.value) {
        return;
    }

    await addReservation(names.value, days.value, date.value);

    names.value = '';
    days.value = '';
    date.value = '';

    showReservations();
}

async function onChange(record, element) {
    element.remove();

    editBtn.dataset.id = record._id;

    document.getElementById('names').value = record.names;
    document.getElementById('days').value = record.days;
    document.getElementById('date').value = record.date;

    document.getElementById('edit-reservation').disabled = false;
    document.getElementById('add-reservation').disabled = true;
}
async function onEdit() {
    let names = document.getElementById('names');
    let days = document.getElementById('days');
    let date = document.getElementById('date');
    let id = editBtn.dataset.id;

    if (!names.value || !days.value || !date.value) {
        return;
    }

    await editReservation(id, names.value, days.value, date.value);

    names.value = '';
    days.value = '';
    date.value = '';
    editBtn.dataset.id = '';

    editBtn.disabled = true;
    addBtn.disabled = false;

    showReservations();
}

async function editReservation(id, names, days, date) {
    let reservation = {
        id,
        names,
        days,
        date
    };

    let options = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reservation)
    }

    await fetch(`${host}/${id}`, options);
}

async function deleteReservation(id) {
    let options = {
        method: 'delete'
    };

    await fetch(`${host}/${id}`, options);
}