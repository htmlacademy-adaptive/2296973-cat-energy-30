/* в этот файл добавляет скрипты*/
const btnAct = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav__checkbox');


// eslint-disable-next-line no-undef
nav.addEventListener('click', () => {
  btnAct.classList.toggle ('main-nav__toggle--close');

});
