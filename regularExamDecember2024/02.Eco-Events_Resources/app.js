window.addEventListener("load", solve);

function solve() {
  let emailField = document.getElementById('email');
  let eventField = document.getElementById('event');
  let locationField = document.getElementById('location');

  let nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', onNext);

  function onNext() {
    let email = emailField.value;
    let event = eventField.value;
    let location = locationField.value;

    if (!email || !event || !location) {
      return;
    }

    let list = document.getElementById('preview-list');
    let listItem = document.createElement('li');
    listItem.className = 'application';

    let article = document.createElement('article');

    let nameHeading = document.createElement('h4');
    nameHeading.textContent = email;
    article.appendChild(nameHeading);

    let eventPara = document.createElement('p');

    let eventStrong = document.createElement('strong');
    eventStrong.textContent = 'Event:';
    eventPara.appendChild(eventStrong);

    let lineBreak = document.createElement('br');
    eventPara.appendChild(lineBreak);

    let eventName = document.createTextNode(event);
    eventPara.appendChild(eventName);

    article.appendChild(eventPara);

    let locationPara = document.createElement('p');

    let locationStrong = document.createElement('strong');
    locationStrong.textContent = 'Location:';
    locationPara.appendChild(locationStrong);

    let locationLineBreak = document.createElement('br')
    locationPara.appendChild(locationLineBreak);

    let locationName = document.createTextNode(location);
    locationPara.appendChild(locationName);

    article.appendChild(locationPara);
    listItem.appendChild(article);

    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'edit';
    editBtn.addEventListener('click', () => onEdit(listItem, email, event, location));

    
    let applyBtn = document.createElement('button');
    applyBtn.className = 'action-btn apply';
    applyBtn.textContent = 'apply';
    applyBtn.addEventListener('click', () => onApply(listItem));

    listItem.appendChild(editBtn);
    listItem.appendChild(applyBtn);

    list.appendChild(listItem);

    nextBtn.disabled = true;

    emailField.value = '';
    eventField.value = '';
    locationField.value = '';
  }

  function onEdit(element, email, event, location) {
    emailField.value = email;
    eventField.value = event;
    locationField.value = location;

    let list = document.getElementById('preview-list');
    list.removeChild(element);

    nextBtn.disabled = false;
  }

  function onApply (element) {
    let approved = document.getElementById('event-list');

    approved.appendChild(element);

    let buttons = element.querySelectorAll('button');

    for (let button of buttons) {
      button.remove();
    }

    nextBtn.disabled = false;
  }
}
