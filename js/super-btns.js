$(function () {
	$.fn.wavify = function () {
		$(this).on('mousedown', function (e) {
			var x = e.offsetX;
			var y = e.offsetY;
			var size = e.currentTarget.clientWidth;
			$(this).append('<span class="waving"></span>').find('.waving').css({
				'left': x + 'px',
				'top': y + 'px'
			})
		});

		$(this).on('mouseup mousemove',function (e) {

				$(this).find('.waving').animate({
					opacity: 0
				}, 1000, function () {
					$(this).remove();
				});
			}
		)
	}
});

$('.wave').wavify();