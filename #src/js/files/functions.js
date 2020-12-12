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
