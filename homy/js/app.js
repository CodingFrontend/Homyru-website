$(window).resize(function () {
	adaptive_function();
});
function adaptive_header(w) {
	let headerColumn_0 = $('.info-header__column').eq(0),
		boxContacts = $('.contacts__box_header'),
		headerColumn_3 = $('.info-header__column').eq(3),
		footerColumn_2 = $('.top-footer__column').eq(2),
		footerContacts = $('.top-footer__contacts'),
		contactsPhone = $('.box-contacts__phone_header'),
		chatSocial = $('.social-contacts__chat_header'),
		skypeSocial = $('.social-contacts__skype_header'),
		contactsEmail = $('.box-contacts__email_header'),
		socialContacts = $('.box-contacts__social_header'),
		bubbleFooter = $('.contacts__bubble_footer'),
		footerMenu = $('.top-footer__column_menu');

	if (w < 1192) {
		if (!bubbleFooter.hasClass('done')) {
			bubbleFooter.addClass('done');
			bubbleFooter.appendTo(footerColumn_2);
		}
	} else {
		bubbleFooter.removeClass('done');
		bubbleFooter.prependTo(footerContacts);
	};

	if (w < 725) {
		if (!footerMenu.hasClass('done')) {
			footerMenu.addClass('done');
			footerMenu.prependTo($('.top-footer__container'));
		}
	} else {
		footerMenu.removeClass('done');
		footerMenu.insertAfter($('.top-footer__column').eq(2));
	}

	if (w < 700.98) {
		if ((contactsPhone, chatSocial, skypeSocial, contactsEmail).filter('done').length == 0) {
			(contactsPhone, chatSocial, skypeSocial, contactsEmail).addClass('done');
			headerColumn_0.append(contactsPhone, chatSocial);
			headerColumn_3.append(contactsEmail, skypeSocial);
		}
	} else {
		(contactsPhone, chatSocial, skypeSocial, contactsEmail).removeClass('done');
		contactsPhone.prependTo(boxContacts);
		contactsEmail.appendTo(boxContacts);
		socialContacts.append(chatSocial, skypeSocial);
	};

}


function adaptive_function() {
	let w = $(window).outerWidth();
	adaptive_header(w);
}
adaptive_function();


//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

if (document.querySelector('.header-slider')) {
	let headerSlider = new Swiper('.header-slider__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 500,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.products-slider__info',
		// 	type: 'fraction',
		// },
		// Arrows
		navigation: {
			nextEl: '.control-header__arrow_next',
			prevEl: '.control-header__arrow_prev',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 	},
		// 	900: {
		// 		slidesPerView: 3,
		// 	},
		// 	1100: {
		// 		slidesPerView: 4,
		// 	},
		// 	1180: {
		// 		slidesPerView: 5,
		// 	},
		// },
	});
};

if (document.querySelector('.mainslider')) {
	let mainSlider = new Swiper('.mainslider__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.mainslider__pagging',
		},
		// Arrows
		navigation: {
			nextEl: '.controls__arrow_next',
			prevEl: '.controls__arrow_prev',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 	},
		// 	900: {
		// 		slidesPerView: 3,
		// 	},
		// 	1100: {
		// 		slidesPerView: 4,
		// 	},
		// 	1180: {
		// 		slidesPerView: 5,
		// 	},
		// },
	});
};

if (document.querySelector('.new-page__items')) {
	let newPage = new Swiper('.new-page__items', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		navigation: {
			nextEl: '.new-page__arrow_next',
			prevEl: '.new-page__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				// autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			712: {
				slidesPerView: 3,
			},
			940: {
				slidesPerView: 4,
			}
		},
	});
};

if (document.querySelector('.recommend-page__items')) {
	let recommendPage = new Swiper('.recommend-page__items', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		navigation: {
			nextEl: '.recommend-page__arrow_next',
			prevEl: '.recommend-page__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				// autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			712: {
				slidesPerView: 3,
			},
			940: {
				slidesPerView: 4,
			}
		},
	});
};

if (document.querySelector('.sale-page__items')) {
	let salePage = new Swiper('.sale-page__items', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		navigation: {
			nextEl: '.sale-page__arrow_next',
			prevEl: '.sale-page__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				// autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			712: {
				slidesPerView: 3,
			},
			940: {
				slidesPerView: 4,
			}
		},
	});
};

if (document.querySelector('.actions-page__items')) {
	let actionsPage = new Swiper('.actions-page__items', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		navigation: {
			nextEl: '.actions-page__arrow_next',
			prevEl: '.actions-page__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				// autoHeight: true,
			},
			480: {
				slidesPerView: 2,
			},
			712: {
				slidesPerView: 3,
			},
			940: {
				slidesPerView: 4,
			}
		},
	});
};

if (document.querySelector('.buy-page__items')) {
	let buyPage = new Swiper('.buy-page__items', {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		// navigation: {
		// 	nextEl: '.actions-page__arrow_next',
		// 	prevEl: '.actions-page__arrow_prev',
		// },
		breakpoints: {
			660: {
				slidesPerView: 3,
			},
			860: {
				slidesPerView: 4,
			}
		},
	});
};

if (document.querySelector('.brands-page__items')) {
	let buyPage = new Swiper('.brands-page__items', {
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 9,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		navigation: {
			nextEl: '.brands-page__arrow_next',
			prevEl: '.brands-page__arrow_prev',
		},
		breakpoints: {
			660: {
				slidesPerView: 5,
			},
			950: {
				slidesPerView: 7,
			},
			1200: {
				slidesPerView: 9,
			}
		},
	});
};

if (document.querySelector('.number-page__items')) {
	let buyPage = new Swiper('.number-page__items', {
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 6,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.mainslider__pagging',
		// },
		// Arrows
		navigation: {
			nextEl: '.number-page__arrow_next',
			prevEl: '.number-page__arrow_prev',
		},
		breakpoints: {
			660: {
				slidesPerView: 4,
			},
			935: {
				slidesPerView: 6,
			}
		},
	});
};




// background-image
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
//
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
//SlideToggle
var _slideUp = function _slideUp(target) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(function () {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
};

var _slideDown = function _slideDown(target) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	target.style.removeProperty('display');
	var display = window.getComputedStyle(target).display;
	if (display === 'none') display = 'block';
	target.style.display = display;
	var height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(function () {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
};

var _slideToggle = function _slideToggle(target) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');

		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
};
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//
//Spollers
let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
				return false;
			}
			if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
				return false;
			}
			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);
		});
	}
}
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
let unlock = true;

const timeout = 300;

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
