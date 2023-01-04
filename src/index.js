import * as bootstrap from "bootstrap";
import $ from "jquery";

// styles

import "./styles/style.scss";

// javascript

import "./js/yandex-map";

console.log("hello!");

$(".toggler-icon").on("click", function () {
	$(this).toggleClass("active");
});
