// let all browsers support referring icons to external svg-file
$(document).ready(function () {
	svg4everybody({});
});

if (isMobile.any()) {
	let menuParents = document.querySelectorAll('.menu-page__parent > a');
	for (let i = 0; i < menuParents.length; i++) {
		const menuParent = menuParents[i];
		menuParent.addEventListener('click', function (e) {
			menuParent.parentElement.classList.toggle('_active');
			e.preventDefault();
		});
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__parent');

	for (let i = 0; i < menuParents.length; i++) {
		const menuParent = menuParents[i];

		menuParent.addEventListener('mouseenter', function (e) {
			menuParent.classList.add('_active');
		});
		menuParent.addEventListener('mouseleave', function (e) {
			menuParent.classList.remove('_active');
		});
	}
}

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