// let all browsers support referring icons to external svg-file
svg4everybody({});
// 

// burger
let menuActions = document.querySelector('.menu__actions');
let menuBody = document.querySelector('.menu__body');
let iconMenu = document.querySelector('.icon-menu');
let menuDropdowns = document.querySelectorAll('.menu__dropdown');

menuActions.addEventListener('click', function (e) {
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
	_slideToggle(menuBody);
});

for (let i = 0; i < menuDropdowns.length; i++) {
	let dropdownContent = menuDropdowns[i].querySelector('.dropdown__content');
	let menuLink = menuDropdowns[i].querySelector('.menu__link');
	menuLink.addEventListener('click', function (e) {
		e.preventDefault();
		_slideToggle(dropdownContent);
	});
}
//