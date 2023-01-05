import * as bootstrap from "bootstrap";
import $ from "jquery";

// styles

import "./styles/style.scss";

// javascript

import "./js/yandex-map";
import "./js/sliders-control"


$(".toggler-icon").on("click", function () {
	$(this).toggleClass("active");
});
