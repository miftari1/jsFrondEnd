const host = 'http://localhost:3030/jsonstore/workout';

const loadBtn = document.getElementById('load-workout');
loadBtn.addEventListener('click', showAllWorkouts);

const editBtn = document.getElementById('edit-workout');
editBtn.addEventListener('click', onEdit);

const addBtn = document.getElementById('add-workout');
addBtn.addEventListener('click', onAdd);

const workoutField = document.getElementById('workout');
const locationField = document.getElementById('location');
const dateField = document.getElementById('date');

async function getAllWorkouts() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function addWorkout(workout, date, location) {
    let obj = {
        workout,
        date,
        location
    }

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }

    await fetch(host, options);

    showAllWorkouts();
}

async function updateRecord(id, workout, date, location) {
    let record = {
        workout,
        date,
        location
    };
    
    record._id = id;

    let options = {
        method: 'put',
        headers: {
            'Content-Type': 'application-json'
        },
        body: JSON.stringify(record)
    }

    await fetch(`${host}/${id}`, options);

    showAllWorkouts();
}

async function deleteWorkout(id) {
    let options = {
        method: 'delete'
    };

    await fetch(`${host}/${id}`, options);

    showAllWorkouts();
}

async function showAllWorkouts() {
    let list = document.getElementById('list');
    list.replaceChildren('');

    let workouts = await getAllWorkouts();


    for (let workout of workouts) {
        let container = document.createElement('div');
        container.className = 'container';

        let workoutName = document.createElement('h2');
        workoutName.textContent = workout.workout;
        container.appendChild(workoutName);

        let workoutDate = document.createElement('h3');
        workoutDate.textContent = workout.date;
        container.appendChild(workoutDate);

        let workoutLocation = document.createElement('h3');
        workoutLocation.id = 'location';
        workoutLocation.textContent = workout.location;
        container.appendChild(workoutLocation);

        let btnContainer = document.createElement('div');
        btnContainer.id = 'buttons-container';

        let changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', () => onChange(container, workout));

        
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Done';
        deleteBtn.addEventListener('click', () => onDelete(workout._id));

        btnContainer.appendChild(changeBtn);
        btnContainer.appendChild(deleteBtn);

        container.appendChild(btnContainer);
        list.appendChild(container);
    }

    editBtn.disabled = true;
}

async function onAdd(e) {
    e.preventDefault();
    
    let workout = workoutField.value;
    let location = locationField.value;
    let date = dateField.value;

    if (!workout || !date || !location) {
        return;
    }

    await addWorkout(workout, date, location);

    workoutField.value = '';
    locationField.value = '';
    dateField.value = '';

    showAllWorkouts();
}

async function onChange(element, record) {
    let list = document.getElementById('list');
    list.removeChild(element);

    workoutField.value = record.workout;
    dateField.value = record.date;
    locationField.value = record.location;

    addBtn.disabled = true;
    editBtn.disabled = false;
    editBtn.dataset.id = record._id;
}

async function onEdit() {

    if (!workoutField.value || !dateField.value || !locationField.value) {
        return;
    }

    let id = editBtn.dataset.id;
    let workout = workoutField.value;
    let date = dateField.value;
    let location = locationField.value;

    await updateRecord(id, workout, date, location);

    showAllWorkouts();

    editBtn.dataset.id = '';
    editBtn.disabled = true;
    addBtn.disabled = false;
}

async function onDelete(id) {
    await deleteWorkout(id);

    showAllWorkouts();
}