Weather Forecast Widget
===================

`npm i` - установка библиотек


`npm start` - запуск на 3000 порту

`npm run build` - сборка bundle.js

#Важно:
 Обращение к https://api.darksky.net/forecast/ выдает ошибку доступа CORS
 
 ```
 No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 ```
 Об этом даже сказано в документации API:
 ```
 Why do I get the error No 'Access-Control-Allow-Origin' header is present on the requested resource when I try to call the API?
 
 We take security very seriously at Dark Sky. As a security precaution we have disabled cross-origin resource sharing (CORS) on our servers.
 
 Your API call includes your secret API key as part of the request. If you were to make API calls from client-facing code, anyone could extract and use your API key, which would result in a bill that you'd have to pay. We disable CORS to help keep your API secret key a secret.
 
 To prevent API key abuse, you should set up a proxy server to make calls to our API behind the scenes. Then you can provide forecasts to your clients without exposing your API key.
 ``` 
 Поэтому реккомендую использовать соответсвующие плагины для Chrome, например https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog

Задание:

 - Зарегистрируйтесь в сервисе https://darksky.net/dev.
 - Напишите на чистом JavaScript (допускается ES2015 под браузер Chrome) виджет, который отображает почасовой прогноз погоды на текущий день. 

Должна быть отображена информация на каждый час: время, температура в градусах Цельсия, скорость ветра в м/с, иконка типа погоды и точка росы.
Должна быть возможность задать город через текстовое поле.

Дополнительно:

Подойдите к задаче с точки зрения архитектуры программных модулей.
Дизайн виджета — на ваше усмотрение.
К результату приложите описание того, почему вы выбрали те или иные решения и какие могут быть альтернативы.


#Описание

Виджет подключается на страницу следующим образом, располагается в теге `div` c `id='meteo'`:

```<!doctype html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<meta name='viewport'
				content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
	<meta http-equiv='X-UA-Compatible' content='ie=edge'>
	<title>Document</title>
</head>
<body>
<div id="meteo"></div>
<script type="text/javascript" src= "bundle.js" ></script>
</body>
</html>
```

Обязательно нужно подключить сам файл bundle.js
`<script type="text/javascript" src= "bundle.js" ></script>`