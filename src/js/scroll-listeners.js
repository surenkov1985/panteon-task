import $ from "jquery";

$(document).ready(function () {
	let animated = false;
	let windowHeight = $(window).innerHeight();
	let documentPosition = $(document).scrollTop();

	if ($(".head").height() === windowHeight && $(document).scrollTop() < windowHeight / 2) {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			100,
			function () {
				$(document).scrollTop(0);
				documentPosition = 0;
			}
		);
	}

	if ($(".head").height() === windowHeight && $(document).scrollTop() < windowHeight && $(document).scrollTop() > windowHeight / 2) {
		$("html, body").animate(
			{
				scrollTop: windowHeight,
			},
			100,
			function () {
				$(document).scrollTop(windowHeight);
				documentPosition = windowHeight;
			}
		);
	}

	$(document).on("scroll", function (e) {
		if (animated) return;
		let scrollTop = $(document).scrollTop();

		if ($(".head").height() === windowHeight && documentPosition === 0 && scrollTop > documentPosition) {
			animated = true;
			$("html, body").animate(
				{
					scrollTop: windowHeight,
				},
				300,
				function () {
					documentPosition = windowHeight;
					animated = false;
				}
			);
		}

		if ($(".head").height() === windowHeight && documentPosition === windowHeight && scrollTop < documentPosition) {
			animated = true;
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				300,
				function () {
					documentPosition = 0;
					animated = false;
				}
			);
		}
		$("html, body").animate({});
	});

	$(".head__scroll-btn").on("click", function (e) {
		animated = true;
		$("html, body").animate(
			{
				scrollTop: windowHeight,
			},
			300,
			function () {
				documentPosition = windowHeight;
				$(document).scrollTop(windowHeight);
				animated = false;
			}
		);
	});

	$(".link").each(function (_, link) {
		$(link).on("click", function (e) {
			e.preventDefault();
			animated = true;

			let sectionPosition = $(e.target.hash).offset().top;

			$("html, body").animate(
				{
					scrollTop: sectionPosition,
				},
				300,
				function () {
					documentPosition = sectionPosition;
					animated = false;
				}
			);
		});
	});
});
