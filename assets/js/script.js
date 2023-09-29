function menuBurger() {
    const menuButton = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}

menuBurger();