// burger
$('.icon-menu').click(function (event) {
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('_active');
})
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
