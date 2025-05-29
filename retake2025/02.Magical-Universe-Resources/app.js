window.addEventListener("load", solve);

function solve(){
    let createBtn = document.getElementById('create-btn');
    createBtn.addEventListener('click', onCreate);

    let nameField = document.getElementById('name');
    let locationField = document.getElementById('location');
    let genderField = document.getElementById('gender');

    function onCreate() {
        if (!nameField.value || !locationField.value || !genderField.value) {
            return;
        }

        let name = nameField.value;
        let location = locationField.value;
        let gender = genderField.value;

        let list = document.getElementById('preparing-list');
        list.replaceChildren('');

        let listItem = document.createElement('div');
        listItem.className = 'creating';
        
        let article = document.createElement('article');

        let namePara = document.createElement('h4');
        namePara.textContent = `${nameField.value}`;

        let locationPara = document.createElement('p');
        locationPara.textContent = `${locationField.value}`;

        let genderPara = document.createElement('p');
        genderPara.textContent = `${genderField.value}`;

        article.appendChild(namePara);
        article.appendChild(locationPara);
        article.appendChild(genderPara);
        listItem.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => onEdit(listItem, name, location, gender));

        let doneBtn = document.createElement('button');
        doneBtn.className = 'action-btn done';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => onDone(listItem));

        listItem.appendChild(editBtn);
        listItem.appendChild(doneBtn);

        list.appendChild(listItem);

        createBtn.disabled = true;

        nameField.value = '';
        locationField.value = '';
        genderField.value = '';
    }

    function onEdit(element, name, location, gender) {
        nameField.value = name;
        locationField.value = location;
        genderField.value = gender;

        element.parentElement.removeChild(element);

        createBtn.disabled = false;
    }

    function onDone(element) {
        let approvedList = document.getElementById('character-list');

        approvedList.appendChild(element);

        let btns = element.querySelectorAll('button');

        for (let btn of btns) {
            element.removeChild(btn);
        }

        createBtn.disabled = false;
    }
}
