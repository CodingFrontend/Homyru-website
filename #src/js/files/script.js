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
	menuDropdowns[i].addEventListener('click', function (e) {
		e.preventDefault();
		_slideToggle(menuDropdowns[i].querySelector('.dropdown__content'));
	});
}

let searchPageSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');

searchPageSelect.addEventListener('click', function (e) {
	this.classList.toggle('_active');
	categoriesSearch.classList.toggle('_active');
	_slideToggle(categoriesSearch);
});

let categories = document.querySelectorAll('.categories-search__checkbox');

for (let i = 0; i < categories.length; i++) {
	const category = categories[i];

	category.addEventListener('change', function (e) {
		category.classList.toggle('_active');

		let activeCategories = document.querySelectorAll('.categories-search__checkbox._active');

		if (activeCategories.length > 0) {
			searchPageSelect.classList.add('_categories');
			let searchPageAmount = searchPageSelect.querySelector('.search-page__amount');
			searchPageAmount.innerHTML = searchPageAmount.getAttribute('data-text') + ' ' + activeCategories.length;
		} else {
			searchPageSelect.classList.remove('_categories');
		}
	});
}

// filter
$(document).ready(function () {
	const priceFilter = document.querySelector('.price-filter__slider');
	if (priceFilter) {
		noUiSlider.create(priceFilter, {
			start: [0, 100000],
			connect: true,
			tooltips: [wNumb({ decimals: 0, thousand: ' ' }), wNumb({ decimals: 0, thousand: ' ' })],
			range: {
				'min': 0,
				'max': 200000
			}
		});

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');


		priceStart.addEventListener('change', function () {
			priceFilter.noUiSlider.set([priceStart.value, null]);
		});
		priceEnd.addEventListener('change', function () {
			priceFilter.noUiSlider.set([null, priceEnd.value]);
		});
	}
});
//

if (isMobile.any()) {
	const filterTitle = document.querySelector('.filter__title');
	if (filterTitle) {
		filterTitle.addEventListener('click', function (e) {
			filterTitle.classList.toggle('_active');
			_slideToggle(filterTitle.nextElementSibling);
		});
	}
}