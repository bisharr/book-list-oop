const languageEl = document.getElementById('language');
const welcomeEl = document.querySelector('.welcome');
console.log(languageEl);

languageEl.addEventListener('change', function (e) {
  console.log(e.target.value);
  if (e.target.value === 'english') {
    welcomeEl.textContent = 'Welcome';
  } else {
    welcomeEl.textContent = 'soo dhowoow';
  }
});
