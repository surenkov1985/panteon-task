import $ from "jquery";

ymaps.ready(function () {
	let myMap = new ymaps.Map("map", {
		center: [55.80570717404386, 38.983969757672],
		zoom: 17,
	});
	myMap.behaviors.disable("scrollZoom");

	let placemark = new ymaps.Placemark(
		[55.80570717404386, 38.983969757672],
		{
			balloonContent: "Встречаемся тут",
		},
		{
			hintContent: "улица Ленина, 84",
		},
		{
			iconLayout: "default#image",
			iconImageHref: "./styles/images/Frame.png",
			iconImageSize: [38, 59],
			iconImageOffset: [-19, -38],
		},
		{}
	);
	myMap.geoObjects.add(placemark);
	let newcoord = myMap.getGlobalPixelCenter();

	
	if ($(window).innerWidth() < 1200) {
		newcoord[0] -= 150;
	}

	if ($(window).innerWidth() < 550) {
		newcoord[0] += 150;
	}

	$(window).on("resize", function (e) {
		if ($(window).innerWidth() < 1200) {
			newcoord[0] -= 150;
		}

		if ($(window).innerWidth() < 550) {
			newcoord[0] += 150;
		}
	});

	myMap.setGlobalPixelCenter(newcoord);
});
