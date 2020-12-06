$(window).resize(function () {
	adaptive_function();
});
function adaptive_header(w) {
	let headerColumn_0 = $('.info-header__column').eq(0),
		boxContacts = $('.box-contacts'),
		headerColumn_3 = $('.info-header__column').eq(3),
		contactsPhone = $('.box-contacts__phone'),
		chatSocial = $('.social-contacts__chat'),
		skypeSocial = $('.social-contacts__skype'),
		contactsEmail = $('.box-contacts__email'),
		socialContacts = $('.social-contacts');

	if (w < 700) {
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
	}
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
	let headerSlider = new Swiper('.mainslider__body', {
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




// burger
$('.icon-menu').click(function(event){
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('_active');
	if($(this).hasClass('_active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('_lock');
})
// 

// logo click => scroll top
// $('.logo').click(function(event){
// 	$('body').data('scroll',$(window).scrollTop());
// })
// 

//fancybox hide content when clicked
// $(".info-main__video").fancybox({
//    afterShow: function(){
//       $('.info-main__video').toggleClass('changed');
//    },
//    afterClose: function(){
//        $('.info-main__video').toggleClass('changed');
//         $("body").css({'overflow-y':'visible'});
//    },
//    beforeShow: function(){
//     $("body").css({'overflow-y':'hidden'});
// 	},
// });
// 

// fancybox images
// $('[data-fancybox="images"]').fancybox({
// 	mobile : {
// 		clickContent : "close",
// 		clickSlide : "close"
// 	},
// 	afterLoad : function(instance, current) {
// 		var pixelRatio = window.devicePixelRatio || 1;

// 		if ( pixelRatio > 1.5 ) {
// 			current.width  = current.width  / pixelRatio;
// 			current.height = current.height / pixelRatio;
// 		}
// 	}
// });
// 

// datepicker
//  $( function() {
//     $( "#date" ).datepicker({
//       firstDay: 1,
//       autoSize: true,
//       minDate: new Date(),
//       dateFormat: "dd.mm.yy",
//     }).datepicker("setDate", new Date());
// });
// 

// input mask
// $(document).ready(function(){
//   $('#tel').inputmask("+7 (999) 999-99-99");
//   $('#expiryDate').inputmask("99/99");  //static mask
//   // $(selector).inputmask({"mask": "(999) 999-9999"}); //specifying options
//   // $(selector).inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
// });
// 

// background-image
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
//

// Slick slider photos
// $(document).ready(function(){
// 	$('.info-main__photos').slick({
// 		arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         mobileFirst: true,
//         variableWidth: true,
//     		responsive: [
//         	{
//            	breakpoint: 767,
//            	settings: "unslick"
//         	}
//      	]
// 	});
// });
//

// Slick slider map card
// $(document).ready(function(){
// 	$('.content-card__row').slick({
// 		prevArrow: $('.control-card-content__arrow_prev'),
// 		nextArrow: $('.control-card-content__arrow_next'),
// 		slidesToShow: 1,
// 		dots: true,
// 		mobileFirst: true,
// 		responsive: [
// 			{
// 				breakpoint: 767,
// 				settings: "unslick"
// 			}
// 		]
// 	});
// });
// 

//show more - show less for photos
// $(document).ready(function(){
// 	let i = 0;
// 	$('.togglePhoto').click(function() {
// 		if (!i) {
// 			$('.info-main__img_more').toggle();
// 			$(this).toggleClass('active');
// 			if ($(this).text() == 'Показать больше фото') {
// 					$(this).text('Меньше фото');
// 			}

// 			i = 1;
// 		} else {
// 			$('.info-main__img_more').toggle();
// 			$(this).toggleClass('active');
// 			$(this).text('Показать больше фото')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for text
// $(document).ready(function(){
// 	let i = 0;
// 	$('.toggleButton').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().children().find('.text-autor__more').css('display','inline');
// 			$(this).parent().prev().children().find('.dots').toggle();
// 			$(this).toggleClass('active');
// 			if ($(this).text() == 'Читать еще') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().children().find('.text-autor__more').css('display','none');
// 			$(this).parent().prev().children().find('.dots').toggle();
// 			$(this).toggleClass('active');
// 			$(this).text('Читать еще')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for reviews
// $(document).ready(function(){
// 	let i = 0;
// 	$('.toggleReviews').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().css('display','flex');
// 			$(this).toggleClass('active');
// 			if ($(this).text() == 'Показать Все (134)') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().css('display','none');
// 			$(this).toggleClass('active');
// 			$(this).text('Показать Все (134)')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for photographer info
// $(document).ready(function(){
// 	let i = 0;
// 	$('.toggleInfo').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().css('display','inline');
// 			if ($(this).text() == 'Читать еще') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().css('display','none');
// 			$(this).text('Показать больше информации о фотографе')

// 			i = 0;
// 		}
// 	})
// })
// 

// multiple show more - show less for photographer info
// $(document).ready(function(){
// 	let i = 0;
// 	$('.text-card__toggle').click(function() {
// 		if (!i) {
// 			$(this).parent().prev().css('display','block');
// 			if ($(this).text() == 'Читать еще') {
// 					$(this).text('Меньше');
// 			}

// 			i = 1;
// 		} else {
// 			$(this).parent().prev().css('display','none');
// 			$(this).text('Показать больше информации')

// 			i = 0;
// 		}
// 	})
// })
//

// Smooth scroll to the target except when opening popup
// $(document).ready(function(){
// 	$('a[href*="#"]:not(a[href="#bookPopup"])').on('click', function (e) {
// 			event.preventDefault();
// 			var id  = $(this).attr('href'),
// 				 top = $(id).offset().top - ($('.navbar').height() + 25);
// 			$('body,html').animate({scrollTop: top}, 800);
//     });
// });
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
let _slideUp = (target, duration = 500) => {
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
  window.setTimeout(() => {
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
}
let _slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
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
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}
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
//=================
//========================================
// Яндекс карты
	// ymaps.ready(init); 
	// var myMap;
	
	// function init() {
	
	// 	myMap = new ymaps.Map("map", {
	// 		center: [55.76314129323675,37.58982066113282], // Координаты центра карты
	// 		zoom: 13 // Маштаб карты
	// 	}); 
	
	// 	myMap.controls.remove('searchControl');
	
	// 	myPlacemark = new ymaps.Placemark([55.758901398901,37.61951869642621], {
 //            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
 //            balloonContentBody: "Встречаемся тут!",
 //        });

 //    myMap.geoObjects.add(myPlacemark);
	// };
// 

// agree checkbox
// window.addEventListener("DOMContentLoaded", function(e) {

  //   var myForm = document.getElementById("popupForm");
  //   var checkForm = function(e) {
  //     if(!this.terms.checked) {
  //       alert("Please indicate that you accept the Terms and Conditions");
  //       this.terms.focus();
  //       e.preventDefault(); // equivalent to return false
  //       return;
  //     }
  //   };

  //   // attach the form submit handler
  //   myForm.addEventListener("submit", checkForm, false);

  //   var myCheckbox = document.getElementById("agree");
  //   var myCheckboxMsg = "Please indicate that you accept the Terms and Conditions";

  //   // set the starting error message
  //   myCheckbox.setCustomValidity(myCheckboxMsg);

  //   // attach checkbox handler to toggle error message
  //   myCheckbox.addEventListener("change", function(e) {
  //     this.setCustomValidity(this.validity.valueMissing ? myCheckboxMsg : "");
  //   }, false);

  // }, false);
// 

// popup
// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 300;

// if (popupLinks.length > 0) {
// 	for (let i = 0; i < popupLinks.length; i++) {
// 		const popupLink = popupLinks[i];
// 		popupLink.addEventListener('click', function(e) {
// 			const popupName = popupLink.getAttribute('href').replace('#', '');
// 			const currentPopup = document.getElementById(popupName);
// 			popupOpen(currentPopup);
// 			e.preventDefault();
// 		});
// 	}
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
// 	for (let i = 0; i < popupCloseIcon.length; i++) {
// 		const el = popupCloseIcon[i];
// 		el.addEventListener('click', function(e) {
// 			popupClose(el.closest('.popup'));
// 			e.preventDefault();
// 		})
// 	}
// }

// function popupOpen(currentPopup) {
// 	if(currentPopup && unlock) {
// 		const popupActive = document.querySelector('.popup.open');
// 		if(popupActive) {
// 			popupClose(popupActive, false);
// 		} else {
// 			bodyLock();
// 		}
// 		currentPopup.classList.add('open');
// 		currentPopup.addEventListener('click', function(e) {
// 			if (!e.target.closest('.popup__body')) {
// 				popupClose(e.target.closest('.popup'));
// 			}
// 		});
// 	}
// }

// function popupClose(popupActive, doUnlock = true) {
// 	if(unlock) {
// 		popupActive.classList.remove('open');
// 		if(doUnlock) {
// 			bodyUnlock();
// 		}
// 	}
// }

// function bodyLock() {
// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

// 	if (lockPadding.length > 0) {
// 		for (let i = 0; i < lockPadding.length; i++) {
// 			const el = lockPadding[i];
// 			el.style.paddingRight = lockPaddingValue;
// 		}
// 	}
// 	body.style.paddingRight = lockPaddingValue;
// 	body.classList.add('lock');

// 	unlock = false;
// 	setTimeout(function () {
// 		unlock = true;
// 	}, timeout);
// }
// function bodyUnlock() {
// 	setTimeout(function () {
// 		if (lockPadding.length > 0) {
// 			for (let i = 0; i < lockPadding.length; i++) {
// 				const el = lockPadding[i];
// 				el.style.paddingRight = '0px';
// 			}
// 		}
// 		body.style.paddingRight = '0px';
// 		body.classList.remove('lock');
// 	}, timeout);

// 	unlock = false;
// 	setTimeout(function() {
// 		unlock = true;
// 	}, timeout);
// }

// document.addEventListener('keydown', function(e) {
// 	if (e.which === 27) {
// 		const popupActive = document.querySelector('.popup.open');
// 		popupClose(popupActive);
// 	}
// });

// (function() {
  // проверяем поддержку
  // if (!Element.prototype.closest) {
    // реализуем
//     Element.prototype.closest = function(css) {
//       var node = this;
//       while (node) {
//         if (node.matches(css)) return node;
//         else node = node.parentElement;
//       }
//       return null;
//     };
//   }
// })();
// (function() {
  // проверяем поддержку
  // if (!Element.prototype.matches) {

    // определяем свойство
//     Element.prototype.matches = Element.prototype.matchesSelector ||
//       Element.prototype.webkitMatchesSelector ||
//       Element.prototype.mozMatchesSelector ||
//       Element.prototype.msMatchesSelector;
//   }
// })();
// 


// show more - show less

// let i = 0;

// const toggleButton = () => {
// 	if (!i) {
// 		document.querySelector('.info-main__photos_more').style.display = "flex";
// 		document.querySelector('#toggleButton').innerHTML = "Меньше";
// 		document.querySelector('#toggleButton').classList.add('active');

// 		i = 1;
// 	} else {
// 		document.querySelector('.info-main__photos_more').style.display = "none";
// 		document.querySelector('#toggleButton').innerHTML = "Показать больше фото";
// 		document.querySelector('#toggleButton').classList.remove('active');
// 		i = 0;
// 	}
// }

// 

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
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
function form_submit(e) {
	let btn = event.target;
	let form = btn.closest('form');
	let message = form.getAttribute('data-message');
	let error = form_validate(form);
	if (error == 0) {
		//SendForm
		form_clean(form);
		if (message) {
			popup_open('message-' + message);
			e.preventDefault();
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		event.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];

				error += form_validate_input(el);
			
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				datepicker(input, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 0
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}