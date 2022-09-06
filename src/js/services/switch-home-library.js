const ref = {
  header: document.querySelector('.header'),
  homeBtn: document.querySelector('.header_home_btn '),
  libraryBtn: document.querySelector('.header_library_btn'),
  form: document.querySelector('#search-form'),
  libr: document.querySelector('.library'),
  watchBtn: document.querySelector('.watch__btn'),
  queueBtn: document.querySelector('.queue__btn'),
  contactBtn: document.querySelector('header_contact_btn'),
  signUpBtn: document.querySelector('.header_singup_btn'),
};

ref.homeBtn.addEventListener('click', onHomeBtnClick);

function onHomeBtnClick() {
  ref.libr.classList.add('is-hidden');
  ref.form.classList.remove('is-hidden');
  ref.homeBtn.classList.add('current');
  ref.libraryBtn.classList.remove('current');
  ref.header.classList.remove('header__is-active');
}

ref.libraryBtn.addEventListener('click', onLibraryBtnClick);

function onLibraryBtnClick() {
  ref.form.classList.add('is-hidden');
  ref.libr.classList.remove('is-hidden');
  ref.libraryBtn.classList.add('current');
  ref.homeBtn.classList.remove('current');
  ref.header.classList.add('header__is-active');
}

ref.queueBtn.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick() {
  ref.watchBtn.classList.remove('btn-js-active ');
  ref.queueBtn.classList.add('btn-js-active ');
}

ref.watchBtn.addEventListener('click', onWatchBtnClick);

function onWatchBtnClick() {
  ref.queueBtn.classList.remove('btn-js-active');
  ref.watchBtn.classList.add('btn-js-active ');
}

document.querySelector('.theme__container').addEventListener('click', () => {
  document.querySelector('.sun-logo').classList.toggle('animate-sun');
  document.querySelector('.moon-logo').classList.toggle('animate-moon');
  document.querySelector('body').classList.toggle('dark');
});