function toggle() {
    let extraInfo = document.getElementById('extra');
    let showMore = document.querySelector('.button');

    if (showMore.textContent == 'MORE') {
        extraInfo.style.display = 'block';
        showMore.textContent = 'LESS';
    }
    else {
        extraInfo.style.display = 'none'
        showMore.textContent = 'MORE';
    }
}