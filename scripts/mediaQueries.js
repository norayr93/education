const tabPort = () => {
    let headerList = document.querySelector('.header__list');
    let dropdownItemFirst = document.querySelectorAll('.header__item_dropdown')[0];
    let dropdownListFirst = dropdownItemFirst.children[1];
    let dropdownItemSecond = document.querySelectorAll('.header__item_dropdown')[1];
    let dropdownListSecond = dropdownItemSecond.children[1];
    let headerListToggleButton = document.querySelector('.header__navigation-button');
    let backOverlay = document.querySelector('.header-layout');
    let navigationCheckbox = document.querySelector('.header__navigation-checkbox');
    let linearDownFirst = document.querySelectorAll('.lnr-down')[0];
    let linearDownSecond = document.querySelectorAll('.lnr-down')[1];

    headerListToggleButton.addEventListener('click', () => {
        headerList.classList.toggle('header__list_visible');
        backOverlay.classList.toggle('back-overlay');
    });

    backOverlay.addEventListener('click', () => {
        headerList.classList.toggle('header__list_visible');
        backOverlay.classList.toggle('back-overlay');
        navigationCheckbox.checked = !navigationCheckbox.checked;
    });

    headerList.addEventListener('blur', () => {
        headerList.classList.toggle('header__list_visible');
    });

    dropdownItemFirst.addEventListener('click', (e) => {
        dropdownListFirst.classList.toggle('dropdown-list');
        if (window.innerWidth < 900) {
            linearDownFirst.classList.toggle('lnr-up');
        }
    });

    dropdownItemSecond.addEventListener('click', (e) => {
        dropdownListSecond.classList.toggle('dropdown-list');
        if (window.innerWidth < 900) {
            linearDownSecond.classList.toggle('lnr-up');
        }
    });

};



window.addEventListener('load', () => {
    tabPort();
})