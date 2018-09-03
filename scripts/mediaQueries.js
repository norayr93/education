const tabPort = () => {
    let headerList = document.querySelector('.header__list');
    let dropdownItemFirst = document.querySelectorAll('.header__item_dropdown')[0];
    let dropdownListFirst = dropdownItemFirst.children[1];
    let dropdownItemSecond = document.querySelectorAll('.header__item_dropdown')[1];
    let dropdownListSecond = dropdownItemSecond.children[1];
    let headerListToggleButton = document.querySelector('.header__navigation-button');
    let backOverlay = document.querySelector('.header-layout');
    let navigationCheckbox = document.querySelector('.header__navigation-checkbox');

	if (window.innerWidth < 900) {
        headerListToggleButton.addEventListener('click', () => {
            headerList.classList.toggle('header__list_visible');
            backOverlay.classList.toggle('back-overlay');
        });

        backOverlay.addEventListener('click', () => {
            headerList.classList.toggle('header__list_visible');
            backOverlay.classList.toggle('back-overlay');
            navigationCheckbox.checked = !navigationCheckbox.checked;
        })

        headerList.addEventListener('blur', () => {
            headerList.classList.toggle('header__list_visible');
        });

        dropdownItemFirst.addEventListener('click', (e) => {
            dropdownListFirst.classList.toggle('dropdown-list');
        });

        dropdownItemSecond.addEventListener('click', (e) => {
            dropdownListSecond.classList.toggle('dropdown-list');
        });
    }
};



window.addEventListener('load', () => {
    tabPort();
})