import { getGeoLocationURL, sendGetForecastRequest, renderWidgetTable } from './helper.js';
import '../styles/styles.scss';

const meteo = document.querySelector('#meteo');

meteo.innerHTML = `<form action="#" id="MyForm" name="myform">
											<p>Введите город <input class="input" id="City" type="text"/></p>
											<button id="submit" type="submit">Отправить</button>
									</form>
									<div id='table'></div>`;

const myForm = document.querySelector('#MyForm');
myForm.addEventListener('submit', getData);

function getData(e)  {
	e.preventDefault();
	const city = e.target.elements.City.value;
	
	myForm.reset();
	
	if (!city) {
		alert('Введите название города');
		return;
	}
	
	const cityName = document.querySelector('#cityName') || '';
	if (cityName) {
		cityName.innerHTML = `<p id='cityName'>Почасовой прогноз на сутки г.${city}`;
	} else {
		const p = document.createElement('p');
		p.innerHTML = `<p id='cityName'>Почасовой прогноз на сутки г.${city}`;
		meteo.insertBefore(p, table);
	}

	let promise = fetch(getGeoLocationURL(city));
	promise
		.then(response => response.json())
		.then(resp => sendGetForecastRequest(resp))
		.then(response => response.json())
		.then(resp => renderWidgetTable(resp))
	  .catch(err => alert('Что то пошло не так'));
}

