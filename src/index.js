window.onload = function () {
    // Mobile Menu
    openedHamburger ();
}

const moveCar = () => {
    if (300 <= window.pageYOffset && window.pageYOffset < 600) {
        document.querySelector('.bus').classList.add('move');
    }
}

window.addEventListener('scroll', moveCar);

const openedHamburger = () => {
    let menuBtn = document.querySelector('.hamburger');
    let headerNavigation = document.querySelector('.header__navigation');

    let menuIconClosed = 'header__hamburger hamburger';
    let menuIconOpened = 'header__hamburger hamburger hamburger_opened';
    let headerNavClosed = 'header__navigation header__navigation_closed';
    let headerNavOpened = 'header__navigation header__navigation_opened';

    menuBtn.addEventListener('click', () => {
        if(menuBtn.className == menuIconClosed) {
            menuBtn.className = menuIconOpened;
            headerNavigation.className = headerNavOpened;
            document.querySelector('.hamburger__line').style.display = 'none';
            document.querySelector('body').style.overflow = 'hidden';
        } else if(menuBtn.className == menuIconOpened) {
            menuBtn.className = menuIconClosed;
            headerNavigation.className = headerNavClosed;
            document.querySelector('.hamburger__line').style.display = 'block';
            document.querySelector('body').style.overflow = 'visible';
        }
    });
}