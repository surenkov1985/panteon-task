import $ from "jquery";

// Gallery controls

$(document).ready(function (e) {
	$(".slider").each(function (_, slider) {
		const sliderContainer = $(slider).find(".slider__container");
		const sliderContent = $(slider).find(".slider__content");
		const sliderControl = $(slider).find(".slider__btn");
		const sliderRange = $(slider).find(".slider__range");
		let sliderEvent = null;

		let sliderWidth = $(sliderContent).innerWidth();
		let sliderContainerWidth = $(sliderContainer).innerWidth();
		$(sliderRange).attr("max", Math.floor(sliderWidth / sliderContainerWidth));
		let scrollLeft;
		let sliderAnimated = false;

		$(window).on("resize", function (e) {
			sliderWidth = $(sliderContent).innerWidth();
			sliderContainerWidth = $(sliderContainer).innerWidth();
			$(sliderRange).attr("max", Math.ceil(sliderWidth / sliderContainerWidth));
		});

		$(sliderRange).on("change, input", function (e) {
			$(sliderContainer).animate(
				{
					scrollLeft: sliderContainerWidth * Number(e.target.value),
				},
				500
			);
		});

		$(sliderControl).each((_, btn) => {
			$(btn).on("click", function (e) {
				if (e.currentTarget.classList.contains("btn-left")) {
					scrollLeft = $(sliderContainer).scrollLeft() - sliderContainerWidth;
				}
				if (e.currentTarget.classList.contains("btn-right")) {
					scrollLeft = $(sliderContainer).scrollLeft() + sliderContainerWidth;
				}

				$(sliderContainer).animate(
					{
						scrollLeft: scrollLeft,
					},
					500
				);
				$(sliderRange).attr("value", Math.ceil(scrollLeft / sliderContainerWidth));
			});
		});

		$(sliderContent).on("touchstart", function (e) {
			sliderEvent = e;
		});

		$(sliderContent).on("touchmove", function (e) {
			if (sliderAnimated) return;

			if (sliderEvent.touches[0].pageX > e.touches[0].pageX) {
				sliderAnimated = true;
				scrollLeft = $(sliderContainer).scrollLeft() + sliderContainerWidth;

				$(sliderRange).attr("value", Math.ceil(scrollLeft / sliderContainerWidth));
			}
			if (sliderEvent.touches[0].pageX < e.touches[0].pageX) {
				sliderAnimated = true;
				scrollLeft = $(sliderContainer).scrollLeft() - sliderContainerWidth;

				$(sliderRange).attr("value", Math.ceil(scrollLeft / sliderContainerWidth));
			}

			$(sliderContainer).animate(
				{
					scrollLeft: scrollLeft,
				},
				500,
				function () {
					sliderAnimated = false;
				}
			);
		});

		$(sliderContent).on("touchend", function (e) {
			sliderEvent = null;
			sliderAnimated = false;
		});
	});

	// Tables Control

	$(".subscriptions__table").each(function (_, table) {
		const tableContent = $(table).find(".table");
		const tableContainer = $(table).find(".subscriptions__table-container");
		const tableRange = $(table).find(".subscriptions__range");
		let tableEvent = null;

		let tableWidth = $(tableContent).innerWidth();
		let tableContainerWidth = $(tableContainer).innerWidth();
		$(tableRange).attr("max", Math.floor(tableWidth / tableContainerWidth));
		let scrollLeft;
		let tableAnimated = false;

		$(tableRange).on("change, input", function (e) {
			$(tableContainer).animate(
				{
					scrollLeft: tableContainerWidth * Number(e.target.value),
				},
				500
			);
		});

		$(tableContent).on("touchstart", function (e) {
			tableEvent = e;
		});

		$(tableContent).on("touchmove", function (e) {
			if (tableAnimated) return;

			if (tableEvent.touches[0].pageX > e.touches[0].pageX) {
				tableAnimated = true;
				scrollLeft = $(table).scrollLeft() + tableContainerWidth;

				$(tableRange).attr("value", Math.ceil(scrollLeft / tableContainerWidth));
			}
			if (tableEvent.touches[0].pageX < e.touches[0].pageX) {
				tableAnimated = true;
				scrollLeft = $(table).scrollLeft() - tableContainerWidth;

				$(tableRange).attr("value", Math.ceil(scrollLeft / tableContainerWidth));
			}

			$(tableContainer).animate(
				{
					scrollLeft: scrollLeft,
				},
				500,
				function () {
					tableAnimated = false;
				}
			);
		});

		$(tableContent).on("touchend", function (e) {
			tableEvent = null;
			tableAnimated = false;
		});
	});
});
