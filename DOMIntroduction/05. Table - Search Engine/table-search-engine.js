function solve() {
   let searchField = document.querySelector('#searchField');
   let rows = document.querySelectorAll('.container tr');


   for (let row of rows) {
      if (searchField.value) {
         if (row.textContent.includes(searchField.value.trim())) {
            row.className = 'select';
         }
         else {
            row.className = '';
         }
      }
   }

   searchField.value = ''; 
   // asArr = Array.from(rows);
   // asArr.shift();

   // for (let i=1; i <= asArr.length; i++) {
   //    let row = document.querySelector(`tbody tr:nth-child(${i})`);
   //    let columns = Array.from(row.children);
   //    let matchesCounter = 0;

   //    for (let col of columns) {
   //       if (col.textContent.toLowerCase().includes(searchField.value.toLowerCase().trim()) && searchField.value != ' ') {
   //          matchesCounter += 1;
   //          break;
   //       }
   //    }
   //    if (matchesCounter == 1) {
   //       row.className = 'select';
   //    }
   //    else {
   //       row.className = '';
   //    }
   // }
   // searchField.value = '';
}