ymaps.ready(function () {
	let myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.80570717404386, 38.983969757672],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
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
			iconImageSize: [38, 59], // указываем размер изображения
			iconImageOffset: [-19, -38], // обозначаем сдвиг от левого верхнего угла к точке изображения метки .
		},
		{
			// preset: "default#image",
		}
	);
	myMap.geoObjects.add(placemark);
});
