
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You have successfully created a button!'
    document.body.appendChild(para)
}

function removeParagraph() {
    const para = document.querySelector('p');

    document.body.removeChild(para);
}

const createButton = document.getElementById('createPara');
createButton.addEventListener('click', addParagraph)


const removeButton = document.getElementById('removePara');
removeButton.addEventListener('click', removeParagraph)
