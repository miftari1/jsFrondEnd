window.addEventListener("load", solve);

function solve() {

    const addBtn = document.getElementById('add_btn');
    const pending = document.getElementById('pending_contact_list');

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();

        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const phone = document.getElementById('phone').value;

        if (!firstName || !lastName || !phone) {
            return;
        }

        let form = document.getElementById('contact_form');
        let newLi = document.createElement('li');
        let nameSpan = document.createElement('span');
        let phoneSpan = document.createElement('span');

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        //TODO: add event listener
        editBtn.addEventListener('click', () => onEdit(firstName, lastName, phone));

        let verifyBtn = document.createElement('button');
        verifyBtn.textContent = 'Verify';
        //TODO: add event listener
        verifyBtn.addEventListener('click', () => onVerify(newLi));
        
        editBtn.className = 'edit_btn';
        verifyBtn.className = 'verify_btn';

        newLi.className = 'contact';
        nameSpan.className = 'names';
        phoneSpan.className = 'phone_number';

        nameSpan.textContent = `${firstName} ${lastName}`;
        phoneSpan.textContent = phone;

        newLi.appendChild(nameSpan);
        newLi.appendChild(phoneSpan);
        newLi.appendChild(editBtn);
        newLi.appendChild(verifyBtn);

        pending.appendChild(newLi);

        form.reset();
    }

    function onEdit(fName, lName, number) {
        
        document.getElementById('first_name').value = fName;
        document.getElementById('last_name').value = lName;
        document.getElementById('phone').value = number;

        let contact = pending.lastChild;

        pending.removeChild(contact);

    }

    function onVerify(element) {
        element.className = 'verified_contact';
        const verified = document.getElementById('contact_list');
        verified.appendChild(element);

        let buttons = element.querySelectorAll('button');

        for (let btn of buttons) {
            element.removeChild(btn);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete_btn';

        deleteBtn.addEventListener('click', () => onDelete(element));

        element.appendChild(deleteBtn);
    }

    function onDelete(toDelete) {
        document.getElementById('contact_list').removeChild(toDelete);
    }
}
