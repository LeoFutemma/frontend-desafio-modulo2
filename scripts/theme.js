const body = document.querySelector('body');
const themeButton = document.querySelector('.btn-theme');
let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';


function changeTheme() {
  themeButton.src = theme === 'light' ? './assets/light-mode.svg' : './assets/dark-mode.svg'
  body.style.setProperty('--background-color', theme === 'light' ? '#FFFFFF' : '#242424');
  body.style.setProperty('--input-border-color', theme === 'light' ? '#979797' : '#FFFFFF');
  body.style.setProperty('--color', theme === 'light' ? '#000000' : '#FFFFFF');
  body.style.setProperty('--shadow-color', theme === 'light' ? '0px 4px 8px rgba(0, 0, 0, 0.3)' : '0px 4px 8px rgba(255, 255, 255, 0.15)');
  body.style.setProperty('--highlight-background', theme === 'light' ? '#FFFFFF' : '#454545');
  body.style.setProperty('--highlight-color', theme === 'light' ? '#000000' : '#FFFFFF');
  body.style.setProperty('--highlight-description', theme === 'light' ? '#000000' : '#FFFFFF');

  localStorage.setItem('theme', theme);
}

changeTheme();

themeButton.addEventListener('click', () => {
  theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  changeTheme();
})