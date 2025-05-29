function solve() {
  let inputText = document.getElementById('input').textContent;
  let output = document.getElementById('output');

  let sentences = inputText.split('.').map(s => s.trim()).filter(s => s != '');
  let subText = '';
  console.log(sentences);

  while (sentences.length > 0) {
    if (sentences.length >= 3) {
      subText = sentences.splice(0, 3).join('.');
    }
    else {
      subText = sentences.splice(0, sentences.length);
    }
    
    output.innerHTML += `<p>${subText}</p>`;
  }
}
