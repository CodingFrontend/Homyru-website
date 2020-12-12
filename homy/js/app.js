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




// burger
$('.icon-menu').click(function (event) {
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('_active');
	if ($(this).hasClass('_active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
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
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
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