function solve() {
   let towns = document.querySelectorAll('li');
   let searchText = document.querySelector('#searchText');
   
   let matches = 0;

   for (let town of towns) {
      if (town.textContent.includes(searchText.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches += 1;
      }
      else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   let result = document.querySelector('#result');

   result.textContent = `${matches} matches found`;
   result.style.fontWeight = 'bold';
   result.style.textDecoration = 'underline';
}