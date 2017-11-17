import { key } from './config.js';

export function unixTime(unixtime) {

	let u = new Date(unixtime * 1000);
	return u.getFullYear() +
		'-' + ('0' + u.getMonth()).slice(-2) +
		'-' + ('0' + u.getDate()).slice(-2) +
		' ' + ('0' + u.getHours()).slice(-2) +
		':' + ('0' + u.getMinutes()).slice(-2) +
		':' + ('0' + u.getSeconds()).slice(-2)
}

export function getGeoLocationURL(city) {
	return `http://nominatim.openstreetmap.org/search?format=json&q=${city}&polygon_geojson=1`;
}

export function getCurrentForecastURL(lat, lon) {
	return `https://api.darksky.net/forecast/${key}/${lat},${lon}?lang=ru&units=si`
}

export function sendGetForecastRequest(resp) {
	const lat = parseFloat(resp[0].lat).toFixed(4);
	const lon = parseFloat(resp[0].lon).toFixed(4);
	return fetch(getCurrentForecastURL(lat, lon));
}

export function renderWidgetTable(resp) {
	const table = document.querySelector('#table');
	const hours = resp.hourly.data;
	table.innerHTML = `<table>
												<thead>
													<th>Дата и время</th>
													<th>Температура</th>
													<th>Скорость ветра</th>
													<th>Точка росы</th>
													<th>Иконка</th>
												</thead>
												<tbody id='tableBody'></tbody>`;
	const tableBody = document.querySelector('#tableBody');
	const date = new Date();
	const currentDay = date.getDate();
	const currentHour = date.getHours();
	hours.every((item, index) => forEachHours(item, currentDay, currentHour, tableBody));
}

export function forEachHours(item, currentDay, currentHour, tableBody) {

	const date = new Date(item.time * 1000);

	if (date.getHours() > currentHour && date.getDate() !== currentDay) return false;
	tableBody.innerHTML += `<tr>
																		<td>
																				${unixTime(item.time)}
																		</td>
																		<td>
																				${item.temperature}
																		</td>
																		<td>
																				${item.windSpeed} м/с
																		</td>
																		<td>
																				${item.dewPoint}
																		</td>
																		<td>
																				<div class='icon ${item.icon}'></div>
																		</td>
																</tr>`;
	return true;
}