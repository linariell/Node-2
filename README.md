<p></p>

<h2 align="center">ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ <br> «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ» <br> КАФЕДРА ИНФОРМАТИКИ </h2>
<p align="center">Лабораторная работа №2 <br>
по курсу «Web-технологии, языки и средства создания web-приложений» 

<p align="center"><b>"Основы языка JavaScript"</b><p>
<p align="right"><b>Выполнила: </b> студентка 331 группы Витковская Полина</p>
<p  align="right"><b>Принял: </b> Соболев Е. И., старший преподователь</p>
<br>
<br>
<br>
<p align="center">Южно-Сахалинск <br> СахГУ <br> 2023</p>
<h2> Введение </h2>
<p>Лабораторные работы по дисциплине «Web-технологии, языки и средства создания web-приложений» предназначены для освоения полученных теоретических знаний на практике. Перед началом лабораторной работы были поставлены цели: <br>
<ol>
  <li>Овладеть навыками работы с node.js. Используя Java Script, решить задачи.
</ol>
В соответствии с данными целями необходимо решить следующие задачи:
<ol>
   <li> Написать скрипты для решения данных задач.
   </ol>
Для реализации данной работы будет использоваться Visual Studio Code. Выполнение кода будет происходить в браузере Google Chrome.
</p>
<h2>Решение задач</h2>
<p>Файл, запускающий сервер на node.js: </p>
<code>
  const express=require("express");
const app=express();

app.use(express.static(__dirname));
app.use("/",function(request,response) {
    response.sendFile("index.html")
});
//app.get("/",function(request,response) {response.render("C:\\Users\\pvitk\\Desktop\\школа\\3курс\\Вебы\\expressapp\\home.hbs");})
app.listen(3000);
console.log('Сервер работает');
</code>

<p>Были выполнены задачи: </p>
<code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
//1
let name = "Ilya";
alert( `hello ${1}` );
alert( `hello ${"name"}` ); 
alert( `hello ${name}` ); 
//2
let Name = prompt("Введите имя", "Иван");
alert(Name);
//3
{
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
alert(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
//4
{let a = 2;
    let x = 1 + (a *= 2);
    alert(`a = ${a}, x = ${x}`);
}
//5
{
    console.log(`"" + 1 + 0 = ${"" + 1 + 0}`);
    console.log(`true + false = ${true + false}`);
    console.log(` 6 / "3" = ${ 6 / "3"}`);
    console.log(`"2" * "3" = ${"2" * "3"}`);
    console.log(`4 + 5 + "px"= ${4 + 5 + "px"}`);
    console.log(`"$" + 4 + 5 = ${"$" + 4 + 5}`);
    console.log(` "4" - 2 = ${ "4" - 2}`);
    console.log(`"4px" - 2 = ${"4px" - 2}`);
    console.log(`7 / 0= ${7 / 0}`);
    console.log(`"  -9  " + 5= ${"  -9  " + 5}`);
    console.log(` "  -9  " - 5 = ${ "  -9  " - 5}`);
    console.log(`null + 1= ${null + 1}`);
    console.log(`undefined + 1 = ${undefined + 1}`);
    console.log(`" \t \n" – 2 = ${" \t \n" - 2 }`);
}
//6
{
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);
    alert(parseInt(a) + parseInt(b)); // 12
}
//7
{
    alert(Math.PI.toFixed(2)); 
}
//8
{
    let num = parseInt(prompt("Введите число", 0));
    alert(`Вы ввели число: ${num}`);
}
//9
{
    let num = parseInt(prompt("Введите число", 0));
    alert(`${num} - вот такое число Вы ввели`);
}
//10
{
    let a = parseInt(prompt("Введите сторону квадрата", 0));
    alert(`Периметр = ${4 * a}`);
}
//11
{
    let rad = parseInt(prompt("Введите радиус окружности", 0));
    alert(`Диаметр = ${2 * rad}`);
}
//12
{
    let h = parseInt(prompt("Введите высоту над Землей ", 1));
    alert(`Расстояние между точками = ${Math.sqrt(6350 * 6350 + h * h)}`);
}
//13
{
    let a = parseInt(prompt("Введите сторону куба", 0));
    alert(`Объем = ${a*a*a} \n Площадь боковой поверх-ти = ${a * a * 4}`);
}
//14
{
    let rad = parseInt(prompt("Введите радиус окружности", 0));
    alert(`Длина = ${2*3.14*rad} \n Площадь круга= ${3.14 * rad * rad}`);
}
//15
{
    let a = parseInt(prompt("Введите a", 0));
    let b = parseInt(prompt("Введите b", 0));
    a = a + b;
    b = a - b;
    a = a - b;
    alert(`a = ${a}, b = ${b}`);
}
//16
{
    let a = parseInt(prompt("Введите a", 0));
    let b = parseInt(prompt("Введите b", 0));
    alert(`Среднее арифметическое = ${(a+b)/2} \n Среднее геометрическое = ${Math.sqrt(a*b)}`); 
}
//17
{
    let V = parseInt(prompt("Введите обьем", 0));
    let m = parseInt(prompt("Введите m", 1));
    alert(`Плотность = ${V/m}`);    
}
//18
{
    let S = parseInt(prompt("Введите площадь государства", 0));
    let n = parseInt(prompt("Введите число граждан", 1));
    alert(`Плотность = ${S/n}`);  
}
//19
{
    let k1 = parseInt(prompt("Введите 1й катет", 0));
    let k2 = parseInt(prompt("Введите 2й катет", 1));
    alert(`Гипотенуза = ${Math.sqrt(k1*k1 + k2*k2)}`);
}
//20
{
    let r1 = parseInt(prompt("Введите радиус внутреннего кольца", 0));
    let r2 = parseInt(prompt("Введите радиус внешнего кольца", 1));
    let s1 = 3.14 * r1 * r1;
    let s2 = 3.14 * r2 * r2;
    alert(`Площадь кольца = ${s2 - s1}`);
}
//21
{
    let k1 = parseInt(prompt("Введите 1й катет", 0));
    let k2 = parseInt(prompt("Введите 2й катет", 1));
    let gip = Math.sqrt(k1*k1 + k2*k2);
    alert(`Периметр = ${k1 + k2 + gip}`);
}
//22
{
    let o1 = parseInt(prompt("Введите 1е основание трапеции", 0));
    let o2 = parseInt(prompt("Введите 2е основание трапеции", 1));
    let h = parseInt(prompt("Введите высоту трапеции", 1));
    let k1 = Math.abs(o2 - o1) / 2;
    let gip = Math.sqrt(k1*k1 + h*h);
    alert(`Периметер трапеции = ${o1 + o2 + 2 * gip}`); 
}
    </script>
    
</body>
</html> 
</code>
<h2>Вывод</h2>
<p>В ходе лабораторной работы были изучены элементы языка Java script. Были рассмотрены способы задания переменных, операций над ними, была проведена работа с циклами и функциями. Результатом лабораторной работы является файл решенными задачами. Выполнение происходило с помощью Node.js</p>
