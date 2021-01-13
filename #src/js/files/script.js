// let all browsers support referring icons to external svg-file
svg4everybody({});
// 

// burger
if (isMobile.any()) {
	(function () {
		let menuActions = document.querySelector('.menu__actions');
		let iconMenu = document.querySelector('.icon-menu');
		let menuList = document.querySelector('.menu__list');
		let menuLinks = menuList.querySelectorAll('.menu__link');
		let dropdownContents = document.querySelectorAll('.dropdown__content');

		if (menuActions != null) {
			let delay = 500;
			let menuBody = document.querySelector(".menu__body");
			menuActions.addEventListener("click", function () {
				if (unlock) {
					body_lock(delay);
					iconMenu.classList.toggle("_active");
					menuBody.classList.toggle("_active");
				}
			});
		}

		// Hide submenu when clicked outside of link

		function closeActive() {
			for (let index = 0; index < dropdownContents.length; index++) {
				let dropdownContent = dropdownContents[index];

				if (window.getComputedStyle(dropdownContent).display === 'block') {
					_slideUp(dropdownContent);
				}
			}
		}

		for (let i = 0; i < menuLinks.length; i++) {
			let menuLink = menuLinks[i];
			menuLink.addEventListener('click', function (e) {

				let parentLink = menuLink.parentNode;
				let dropdownContent = parentLink.querySelector('.dropdown__content');
				e.preventDefault();

				closeActive();

				if (window.getComputedStyle(dropdownContent).display === 'none') {
					_slideDown(dropdownContent);
				}
				e.stopPropagation();
			});
		}
	})();
}
//
