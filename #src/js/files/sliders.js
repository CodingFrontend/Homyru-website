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



