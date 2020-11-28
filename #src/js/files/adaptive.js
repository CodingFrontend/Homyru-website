$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	let bottomHeaderColumn_1 = $('.bottom-header__column').eq(0);
	let infoHeaderColumn = $('.info-header__column').eq(0);
	let infoHeaderCart = $('.info-header__column_cart');
	let pageSideNews = $('.page__side-news');
	let pageSideReviews = $('.page__side-reviews');

	if (w < 640.98) {
		if(!bottomHeaderColumn_1.hasClass('done') && !infoHeaderColumn.hasClass('done') && !infoHeaderCart.hasClass('done')){
			bottomHeaderColumn_1.addClass('done').prependTo($('.menu__body'));
			infoHeaderColumn.addClass('done').appendTo($('.menu__body'));
			infoHeaderCart.addClass('done').appendTo($('.contacts-header__item_forcart'));
		}
	} else {
		bottomHeaderColumn_1.removeClass('done').prependTo($('.bottom-header__content'));
		infoHeaderColumn.removeClass('done').prependTo($('.bottom-header__info'));
		infoHeaderCart.removeClass('done').appendTo($('.bottom-header__info'));
	}
	if (pageSideNews.length && pageSideReviews.length) {
		if (w < 991.98) {
			if(!pageSideNews.hasClass('done') && !pageSideReviews.hasClass('done')) {
				pageSideNews.addClass('done').appendTo($('.page__content'));
				pageSideReviews.addClass('done').appendTo($('.page__content'));
			}
		} else {
			pageSideNews.removeClass('done').appendTo($('.page__side'));
			pageSideReviews.removeClass('done').appendTo($('.page__side'));
		}
	}
}

function adaptive_function() {
	let w=$(window).outerWidth();
	let h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();

	