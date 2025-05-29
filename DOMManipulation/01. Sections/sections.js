document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let submitBtn = document.querySelector('input[type="submit"]'); 

   submitBtn.addEventListener('click', addElements);

   function addElements(event) {
      event.preventDefault();
      
      let strings = document.querySelector('input[type="text"]').value.split(', ');             
      let content = document.getElementById('content');

      for(let text of strings) {
         let currDiv = document.createElement('div');
         let para = document.createElement('p');
         para.textContent = text;
         currDiv.appendChild(para);
         content.appendChild(currDiv);
      }
   }
}