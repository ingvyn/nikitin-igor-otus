# Приложение погоды

Представлена стадия разработки приложения с заранее подготовленными данными в модуле src/components/weatherReqs.js. В модуле подготовлены ответы с API https://openweathermap.org/ по городам Москва, Екатеринбург, Мурманск, Владивосток, Омск, Санкт-Петербург.
Корневой компонент с основной логикой WeatherSearchControl определен в src/index.jsx. Компонент, размещающий ответ API, с возможностью добавить город с текущей погодой в избранное, WeatherResponse, компонент FavoredList, отображающий список избранных городов с погодой, и компонент WeatherFavoredItem, отображающий элемент списка, размещены в src/components. Функциональный компонент WeatherFavoredItem стал базовым для state/smart компонента WeatherResponse.
