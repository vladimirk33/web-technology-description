import i18Obj from './translate.js';

let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
getTranslate(lang);

// get translation
function getTranslate(lang) {
    const data = document.querySelectorAll('[data-i18]');
    data.forEach((item) => {
        if (item.placeholder) {
            item.placeholder = i18Obj[lang][item.dataset.i18];
            item.textContent = '';
        } else {
            item.textContent = i18Obj[lang][item.dataset.i18];
        }
    });
    if (lang === 'en') {
        document.querySelector('.btn-en').classList.add('active-btn');
    }
    if (lang === 'ru') {
        document.querySelector('.btn-ru').classList.add('active-btn');
    }
}

// change language
function changeLanguage(event) {
    if (event.target.classList.contains('switch-lang-btn')) {
        if (!event.target.classList.contains('active-btn')) {
            lang === 'en' ? lang = 'ru' : lang = 'en';
        }
        const switchBtns = document.querySelectorAll('.switch-lang-btn');
        switchBtns.forEach((elem) => elem.classList.remove('active-btn'));
        getTranslate(lang);
        if (event.target.classList.contains('btn-en')) {
            event.target.classList.add('active-btn');
        }
        if (event.target.classList.contains('btn-ru')) {
            event.target.classList.add('active-btn');
        }
    }
}
document.querySelector('.switch-lang-container').addEventListener('click', changeLanguage);

// to-top-button
let toTopButton = document.querySelector('.to-top-button');

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
toTopButton.addEventListener('click', topFunction);

// local storage
function setLocalStorage() {
    localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslate(lang);
    }
}
window.addEventListener('load', getLocalStorage)