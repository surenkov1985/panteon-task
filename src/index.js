import * as bootstrap from "bootstrap";
import $ from "jquery";

// styles

import "./styles/style.scss";

// javascript

import "./js/yandex-map";
import "./js/sliders-control";
import "./js/scroll-listeners";

$(".toggler-icon").each(function (_, btn) {
	$(btn).on("click", function () {
		$(this).toggleClass("active");
	});
});

$(".questions__form").on("submit", function (e) {
	e.preventDefault();
});
