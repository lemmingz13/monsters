document.querySelector('.burger_menu').addEventListener('click', () => {       //burger menu
    document.querySelector('.burger').classList.toggle('burger_active');
    document.querySelector('.burger_menu_main').classList.toggle('burger_menu_main_active');
});

document.querySelector('#sully').addEventListener('click', () => {            //active modal window
    document.querySelector('.modal_sully').classList.toggle('modal_active');
    document.querySelector('html').classList.toggle('noscroll');
});

document.querySelector('#mike').addEventListener('click', () => {            //active modal window
    document.querySelector('.modal_mike').classList.toggle('modal_active');
    document.querySelector('html').classList.toggle('noscroll');
});

document.querySelector('#randall').addEventListener('click', () => {            //active modal window
    document.querySelector('.modal_randall').classList.toggle('modal_active');
    document.querySelector('html').classList.toggle('noscroll');
});

document.querySelector('.button').addEventListener('click', () => {            //close modal window
    document.querySelector('.modal').classList.remove('modal_active');
    document.querySelector('html').classList.remove('noscroll');
});

document.querySelector('.button1').addEventListener('click', () => {            //close modal window
    document.querySelector('.modal_mike').classList.remove('modal_active');
    document.querySelector('html').classList.remove('noscroll');
});

document.querySelector('.button2').addEventListener('click', () => {            //close modal window
    document.querySelector('.modal_randall').classList.remove('modal_active');
    document.querySelector('html').classList.remove('noscroll');
});
