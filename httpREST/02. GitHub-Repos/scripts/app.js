function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)
      .then((res) => res.text())
      .then((data) => {
         let output = document.getElementById('res');

         output.textContent = data;
      })
   }