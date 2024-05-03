function bg() {
    let select = document.getElementById('bg').value;
    document.body.style.backgroundColor=select;
}
function mode() {
    var bodyElement = document.body;
  var buttonElement = document.getElementById('mode');
  
  if (bodyElement.classList.contains('light-mode')) {
    bodyElement.classList.replace('light-mode', 'dark-mode');
    buttonElement.textContent = 'Light Mode';
  } else {
    bodyElement.classList.replace('dark-mode', 'light-mode');
    buttonElement.textContent = 'Dark Mode';
  }
}