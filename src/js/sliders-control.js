import $ from "jquery";

// Slider 1 variables

const slider1 = $(".slider1");
const slider1Container = $(slider1).find(".slider__container");
const slider1Content = $(slider1).find(".slider__content");
const slider1Control = $(slider1).find(".slider__btn");
const slider1Range = $(slider1).find(".slider__range");
let slider1Event = null;

let slider1Width = $(slider1Content).innerWidth();
let slider1ContainerWidth = $(slider1Container).innerWidth();
$(slider1Range).attr("max", Math.floor(slider1Width / slider1ContainerWidth));
let scroll1Left;
let slider1Animated = false;

// slider 2 variables

const slider2 = $(".slider2");
const slider2Container = $(slider2).find(".slider__container");
const slider2Content = $(slider2).find(".slider__content");
const slider2Control = $(slider2).find(".slider__btn");
const slider2Range = $(slider2).find(".slider__range");
let slider2Event = null;
let slider2Animated = false;

let slider2Width = $(slider2Content).innerWidth();
let slider2ContainerWidth = $(slider2Container).innerWidth();
$(slider2Range).attr("max", Math.floor(slider2Width / slider2ContainerWidth));
let scroll2Left;

$(window).on("resize", function (e) {
	slider1Width = $(slider1Content).innerWidth();
	slider1ContainerWidth = $(slider1Container).innerWidth();
	$(slider1Range).attr("max", Math.ceil(slider1Width / slider1ContainerWidth));

	slider2Width = $(slider2Content).innerWidth();
	slider2ContainerWidth = $(slider2Container).innerWidth();
	$(slider2Range).attr("max", Math.ceil(slider2Width / slider2ContainerWidth));
});

// Slider 1 listeners

$(slider1Range).on("change, input", function (e) {
	$(slider1Container).animate(
		{
			scrollLeft: slider1ContainerWidth * Number(e.target.value),
		},
		500
	);
});

$(slider1Control).each((_, btn) => {
	$(btn).on("click", function (e) {
		if (e.currentTarget.classList.contains("btn-left")) {
			scroll1Left = $(slider1Container).scrollLeft() - slider1ContainerWidth;
		}
		if (e.currentTarget.classList.contains("btn-right")) {
			scroll1Left = $(slider1Container).scrollLeft() + slider1ContainerWidth;
		}

		$(slider1Container).animate(
			{
				scrollLeft: scroll1Left,
			},
			500
		);
		$(slider1Range).attr("value", Math.ceil(scroll1Left / slider1ContainerWidth));
	});
});

$(slider1Content).on("touchstart", function (e) {
	console.log(e);
	slider1Event = e;
});

$(slider1Content).on("touchmove", function (e) {
	if (slider1Animated) return;

	if (slider1Event.touches[0].pageX > e.touches[0].pageX) {
		slider1Animated = true;
		scroll1Left = $(slider1Container).scrollLeft() + slider1ContainerWidth;

		$(slider1Range).attr("value", Math.ceil(scroll1Left / slider1ContainerWidth));
	}
	if (slider1Event.touches[0].pageX < e.touches[0].pageX) {
		slider1Animated = true;
		scroll1Left = $(slider1Container).scrollLeft() - slider1ContainerWidth;

		$(slider1Range).attr("value", Math.ceil(scroll1Left / slider1ContainerWidth));
	}

	$(slider1Container).animate(
		{
			scrollLeft: scroll1Left,
		},
		500,
		function () {
			slider1Animated = false;
		}
	);
});

$(slider1Content).on("touchend", function (e) {
	slider1Event = null;
	slider1Animated = false;
});

//  Slider 2 listeners

$(slider2Range).on("change, input", function (e) {
	$(slider2Container).animate(
		{
			scrollLeft: slider2ContainerWidth * Number(e.target.value),
		},
		500
	);
});

$(slider2Control).each((_, btn) => {
	$(btn).on("click", function (e) {
		if (e.currentTarget.classList.contains("btn-left")) {
			scroll2Left = $(slider2Container).scrollLeft() - slider2ContainerWidth;
		}
		if (e.currentTarget.classList.contains("btn-right")) {
			scroll2Left = $(slider2Container).scrollLeft() + slider2ContainerWidth;
		}

		$(slider2Container).animate(
			{
				scrollLeft: scroll2Left,
			},
			500
		);
		$(slider2Range).attr("value", Math.ceil(scroll2Left / slider2ContainerWidth));
	});
});

$(slider2Content).on("touchstart", function (e) {
	console.log(e);
	slider2Event = e;
});

$(slider2Content).on("touchmove", function (e) {
	if (slider2Animated) return;

	if (slider2Event.touches[0].pageX > e.touches[0].pageX) {
		slider2Animated = true;
		scroll2Left = $(slider2Container).scrollLeft() + slider2ContainerWidth;

		$(slider2Range).attr("value", Math.ceil(scroll2Left / slider2ContainerWidth));
	}
	if (slider2Event.touches[0].pageX < e.touches[0].pageX) {
		slider2Animated = true;
		scroll2Left = $(slider2Container).scrollLeft() - slider2ContainerWidth;

		$(slider2Range).attr("value", Math.ceil(scroll2Left / slider2ContainerWidth));
	}

	$(slider2Container).animate(
		{
			scrollLeft: scroll2Left,
		},
		500,
		function () {
			slider2Animated = false;
		}
	);
});

$(slider2Content).on("touchend", function (e) {
	slider2Event = null;
	slider2Animated = false;
});
