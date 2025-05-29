function solve() {
  let inputText = document.getElementById('text').value;
  let namingConv = document.getElementById('naming-convention').value;
  let output = document.getElementById('result');

  let result = '';

  if (namingConv == 'Pascal Case') {
    let asArr = inputText.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    let capitalized = asArr.join('');
    result = capitalized;
  }
  else if (namingConv == 'Camel Case') {
    let asArr = inputText.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    let capitalized = asArr.join('');
    result = capitalized.replace(capitalized.charAt(0), capitalized.charAt(0).toLowerCase());
  }
  else {
    result = 'Error!'
  }

  output.textContent = result;
}