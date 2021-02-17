import menu from './menu.json';
import menuItemsTemplates from './templates/menu-items.hbs';
import './styles.css';

const bodyRef = document.querySelector('body');
const checkThemeRef = document.querySelector('.theme-switch__toggle');
const menuItemsRef = document.querySelector('.js-menu');

checkThemeRef.addEventListener('change', doChangeTheme);

function doChangeTheme() {
  if (checkThemeRef.checked) {
    bodyRef.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else if (!checkThemeRef.checked) {
    bodyRef.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

function seveCurrentTheme() {
  const getCurrentTheme = localStorage.getItem('theme');
  if (getCurrentTheme === 'dark-theme') {
    bodyRef.classList.add('dark-theme');
    checkThemeRef.checked = true;
  } else if (getCurrentTheme === 'light-theme') {
    bodyRef.classList.add('light-theme');
  }
}
seveCurrentTheme();

const dynamicMenu = menuItemsTemplates(menu);

menuItemsRef.insertAdjacentHTML('beforeend', dynamicMenu);
