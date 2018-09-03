function getCoords() {
	let navigation = document.querySelector('.header__navigation');
	let heading = document.querySelector('h1');
	let headingCoords = heading.getBoundingClientRect();
	
	if ( headingCoords.top < 180) {
		navigation.classList.add('header__navigation_scrolled');
	} else {
		navigation.classList.remove('header__navigation_scrolled');
	}
}



document.onscroll = function () {
	getCoords();
};
