document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputs = document.querySelectorAll('input[type="number"]');
    const buttons = document.querySelectorAll('input[type="submit"]');
    let timeUnitValue = 0;
    let timeUnitName = '';

    for (let input of inputs) {
        if (input.value) {
            timeUnitValue = Number(input.value);
            timeUnitName = input.id;
        }
    }
    for (let btn of buttons) {
        btn.addEventListener('click', convertTime);
    }

    function convertTime(e) {
        
        e.preventDefault();

        
    }
}