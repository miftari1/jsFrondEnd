window.addEventListener("load", solve);

function solve(){
    let saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', onSave);

    let deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', onDelete);

    let nameInput = document.getElementById('event');
    let noteInput = document.getElementById('note');
    let dateInput = document.getElementById('date');

    function onSave() {
        let name = nameInput.value;
        let note = noteInput.value;
        let date = dateInput.value;


        if (!name || !note || !date) {
            return;
        }

        let list = document.getElementById('upcoming-list');

        let eventItem = document.createElement('li');
        eventItem.className = 'event-item';

        let container = document.createElement('div');
        container.className = 'event-container';

        let article = document.createElement('article');

        let namePara = document.createElement('p');
        namePara.textContent = `Name: ${name}`;
        article.appendChild(namePara);

        let notePara = document.createElement('p');
        notePara.textContent = `Note: ${note}`;
        article.appendChild(notePara);

        let datePara = document.createElement('p');
        datePara.textContent = `Date: ${date}`;
        article.appendChild(datePara);

        container.appendChild(article);

        let buttons = document.createElement('div');
        buttons.className = 'buttons';

        let editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click',() => onEdit(eventItem, name, note, date));
        buttons.appendChild(editBtn);

        let doneBtn = document.createElement('button');
        doneBtn.className = 'btn done';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => onDone(eventItem, container, buttons));
        buttons.appendChild(doneBtn);

        container.appendChild(buttons);
        eventItem.appendChild(container);

        list.appendChild(eventItem);

        nameInput.value = '';
        noteInput.value = '';
        dateInput.value = '';
    }

    function onEdit(element, name, note, date) {
        nameInput.value = name;
        noteInput.value = note;
        dateInput.value = date;

        let list = document.getElementById('upcoming-list');
        list.removeChild(element);
    }

    function onDone(element, elementChild, buttonContainer) {
        let savedEvents = document.getElementById('events-list');
        
        elementChild.removeChild(buttonContainer);
        savedEvents.appendChild(element);

    }

    function onDelete() {
        let savedEvents = document.getElementById('events-list');
        savedEvents.replaceChildren('');
    }    
}

