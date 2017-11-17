Weather Forecast Widget
===================

`npm i` - установка библиотек


`npm start` - запуск на 3000 порту

`npm run build` - сборка bundle.js



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