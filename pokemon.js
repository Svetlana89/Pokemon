var b = 0,
properties = ["Name", "Type", "Attack", "Defence", "HP", "Sp Attack", "Sp Defence", "Speed", "Weight", "Total moves"];//создаем массив, значениями которого будем заполнять инфо таблицу по покемонам
button = document.getElementById("mainBut"),//присваем переменным элементы объекта DOM с которыми будем дальше работать
tableData = document.getElementById("tableData"),
td = document.getElementsByTagName('td'),
setTable = document.forms.poki,
div = document.getElementsByTagName('div');

function getTable() { //эта функция будет создавать таблицу для последующего вывода информации в нее
	if (b === 0) { //счетчик, с помощью которого функция выполнится только один раз при клике, когда мы повесим ее на кнопку 
		b++;
		var i,
		j,
		k,
		table = document.createElement('table'),// создаем тег table
		img = document.createElement('img'); //создаем тег img
		table.id = "tableData"; // добавляем атрибуты id, rules, src к тегам и присваем им определенные значения
		table.rules = "groups";
		img.src = "image1.jpg";
		for (i = 1, k = -1; i <= 11; i++, k += 2) {
			if (i === 1 || i === 2) { // создаем ряды, столбцы в таблице, добавляем к ним различные атрибуты
				var row = table.insertRow(-1), // добавляем ряд в таблицу
				cell = row.insertCell(-1); // добавляем столбец в этот ряд
				cell.setAttribute('colspan', '2');
				cell.id = "td" + i;
				if (i === 1) {
					cell.appendChild(img); //вставляем картинку в один из столбцов
				}
			} else {
				var row = table.insertRow(-1);
				for (j = 1; j <= 2; j++) {
					var cell = row.insertCell(-1);
					if (j === 1) {
						cell.id = "td" + k;
					} else {
						cell.id = "td" + (k + 1);
					}
				}
			}
		}
		setTable.parentNode.insertBefore(table, setTable);// указываем куда вставить таблицу
		document.getElementById('td2').innerHTML = properties[0]; // заполняем рядки в левом столбце таблицы значениями из массива properties
		for (i = 1, j = 3; i < properties.length, j < td.length; i++, j += 2) {
			document.getElementById('td' + j).innerHTML = properties[i];
		}
	}
}
button.addEventListener('click', getTable, false); // вешаем событие клик на кнопку, при клике запустится функция по созданию таблицы
// Создаем функции для каждой группы покемонов с помощью которых через AJAX будут заполняться данные по каждому из них, которые хранятся в файле infoPokemon.json
function startBulbazar(n) {
	xhttp = new XMLHttpRequest(); // Создаем объект XMLHttpRequest
	xhttp.open('GET', 'infoPokemon.json', true); // Запросим содержимое файла infoPokemon.json
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4) { // Если обработка запроса закончена и ответ готов
			var i,
			j,
			json = JSON.parse(xhttp.responseText), //Принятое содержимое json файла распарсим с помощью функции JSON.parse();
			thisData = json.Bulbazar[n];
			for (i = 0, j = 2; i < thisData.length, j <= td.length; i++, j += 2) { //Заполняем данными по покемонам таблицу
				document.getElementById('td' + j).innerHTML = thisData[i];
			}
		}
	}
}

function startCharmander(n) {
	xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'infoPokemon.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4) {
			var i,
			j,
			json = JSON.parse(xhttp.responseText),
			thisData = json.Charmander[n];
			for (i = 0, j = 2; i < thisData.length, j <= td.length; i++, j += 2) {
				document.getElementById('td' + j).innerHTML = thisData[i];
			}
		}
	}
}

function startPikachu(n) {
	xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'infoPokemon.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4) {
			var i,
			j,
			json = JSON.parse(xhttp.responseText),
			thisData = json.Pikachu[n];
			for (i = 0, j = 2; i < thisData.length, j <= td.length; i++, j += 2) {
				document.getElementById('td' + j).innerHTML = thisData[i];
			}
		}
	}
}

var i;
for (i = 0; i < div.length; i++) { //циклично проходим все div из объекта DOM и вешаем на нужные нам событие onclick.
	div[i].onclick = function () {
		switch (this.id) {
		case 'B1':
			startBulbazar(0);
			break;
		case 'B2':
			startBulbazar(1);
			break;
		case 'B3':
			startBulbazar(2);
			break;
		case 'B4':
			startBulbazar(3);
			break;
		case 'C1':
			startCharmander(0);
			break;
		case 'C2':
			startCharmander(1);
			break;
		case 'C3':
			startCharmander(2);
			break;
		case 'C4':
			startCharmander(3);
			break;
		case 'P1':
			startPikachu(0);
			break;
		case 'P2':
			startPikachu(1);
			break;
		case 'P3':
			startPikachu(2);
			break;
		case 'P4':
			startPikachu(3);
			break;
		}
	}
}
