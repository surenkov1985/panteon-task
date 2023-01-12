import $ from "jquery";

// Gallery controls

$(document).ready(function (e) {
	$(".slider").each(function (_, slider) {
		const sliderContainer = $(slider).find(".slider__container");
		const sliderContent = $(slider).find(".slider__content");
		const sliderControl = $(slider).find(".slider__btn");
		const sliderRange = $(slider).find(".slider__range");
		const slide = $(slider).find(".slide");
		let sliderValue = +$(sliderRange).val();
		let slideWidth = sliderWidth / $(slide).length;
		let sliderEvent = null;

		let sliderWidth = $(sliderContent).innerWidth();
		let sliderContainerWidth = $(sliderContainer).innerWidth();
		$(sliderRange).attr("max", Math.ceil((sliderWidth - sliderContainerWidth) / (sliderWidth / $(slide).length)));
		let scrollLeft;
		let sliderAnimated = false;

		$(window).on("resize", function (e) {
			sliderWidth = $(sliderContent).innerWidth();
			sliderContainerWidth = $(sliderContainer).innerWidth();
			slideWidth = sliderWidth / $(slide).length;
			$(sliderRange).attr("max", Math.ceil((sliderWidth - sliderContainerWidth) / (sliderWidth / $(slide).length) + 1));
		});

		$(sliderRange).on("change", function (e) {
			slideWidth = sliderWidth / $(slide).length;
			if (sliderAnimated) return;

			if (sliderValue < +$(sliderRange).val()) {
				sliderAnimated = true;
				scrollLeft = $(sliderContainer).scrollLeft() + slideWidth * (+$(sliderRange).val() - sliderValue);
			} else if (sliderValue > +$(sliderRange).val()) {
				sliderAnimated = true;
				scrollLeft = $(sliderContainer).scrollLeft() - slideWidth * (sliderValue - +$(sliderRange).val());
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

			sliderValue = +$(sliderRange).val();
		});

		$(sliderControl).each((_, btn) => {
			$(btn).on("click", function (e) {
				slideWidth = sliderWidth / $(slide).length;
				if (e.currentTarget.classList.contains("btn-left")) {
					scrollLeft = $(sliderContainer).scrollLeft() - slideWidth;
					sliderValue = +$(sliderRange).val() === 0 ? 0 : +sliderValue - 1;
				}
				if (e.currentTarget.classList.contains("btn-right")) {
					scrollLeft = $(sliderContainer).scrollLeft() + slideWidth;
					sliderValue = +$(sliderRange).val() === +$(sliderRange).attr("max") ? $(sliderRange).attr("max") : +sliderValue + 1;
				}

				$(sliderContainer).animate(
					{
						scrollLeft: scrollLeft,
					},
					500
				);
				$(sliderRange).val(sliderValue);
			});
		});

		$(sliderContent).on("touchstart", function (e) {
			sliderEvent = e;
		});

		$(sliderContent).on("touchmove", function (e) {
			slideWidth = sliderWidth / $(slide).length;
			if (sliderAnimated) return;

			if (sliderEvent.touches[0].pageX > e.touches[0].pageX) {
				sliderAnimated = true;
				scrollLeft = $(sliderContainer).scrollLeft() + slideWidth;
				sliderValue = +$(sliderRange).val() === +$(sliderRange).attr("max") ? $(sliderRange).attr("max") : +sliderValue + 1;
			}
			if (sliderEvent.touches[0].pageX < e.touches[0].pageX) {
				sliderAnimated = true;
				scrollLeft = $(sliderContainer).scrollLeft() - slideWidth;
				sliderValue = +$(sliderRange).val() === 0 ? 0 : +sliderValue - 1;
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

			$(sliderRange).val(sliderValue);
		});

		$(sliderContent).on("touchend", function (e) {
			sliderEvent = null;
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

		console.log(tableWidth, tableContainerWidth);

		$(tableRange).on("change", function (e) {
			if (tableAnimated) return;

			scrollLeft = tableContainerWidth * Number(e.target.value);
			tableAnimated = true;

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

		$(tableContent).on("touchstart", function (e) {
			tableEvent = e;
		});

		$(tableContent).on("touchmove", function (e) {
			if (tableAnimated) return;

			if (tableEvent.touches[0].pageX > e.touches[0].pageX) {
				tableAnimated = true;
				scrollLeft = $(tableContainer).scrollLeft() + tableContainerWidth;

				$(tableRange).val(Math.ceil(scrollLeft / tableContainerWidth));
			}
			if (tableEvent.touches[0].pageX < e.touches[0].pageX) {
				tableAnimated = true;
				scrollLeft = $(tableContainer).scrollLeft() - tableContainerWidth;

				$(tableRange).val(Math.ceil(scrollLeft / tableContainerWidth));
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
		});
	});
});
