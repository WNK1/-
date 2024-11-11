window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 2500);
  });
  

  firstOBJ = {
    user : 1,
    what:"это число",
    whats:'2',
    mmok:'а это уже строка',
  }

  console.log(firstOBJ);
  firstOBJ.global="вопрос ??";

  console.log(firstOBJ);
  delete firstOBJ.global;
  console.log(firstOBJ);

  const logi=firstOBJ;
  console.log(logi)
  logi.whats=5;
  console.log(logi)

  console.log(firstOBJ) // так как это именно копирование данный изменяюся и в основном массиве 


  //дублирование - абсолютно новый объект без связи с оригиналом 
  //назначение переменной в которое это будет копироваться 
  let Dublitovanie = Object.assign({},logi)
  Dublitovanie.prvet = 30;
  Dublitovanie["ты кто?"]=' who is you?';
  console.log(Dublitovanie)
  //так же можно добавлять свойства прямо строчкой с ипс 
  Object.assign(Dublitovanie,{bunny:"кролик",whoisBunny:{['its animal?']:'yes',huge:"no"}})
  console.log(Dublitovanie)


  console.log(`старый объект без использования дублирования / он создан на копирование`)
  console.log(logi)

  if(Dublitovanie.prvet11){
    console.log(`объект сущетвует , а именно объект со значением ${Dublitovanie.prvet}`);//проваерка на существование 
  }else{
    console.log(`к сожелению такого объекта нет`)
  }

  //проверка методом опциональной цепочки 
  console.log(Dublitovanie?.whoisBunny?.huge);

  console.log('повтор перебора значений объекта for ... in')
  for(const poluchenieDannie in Dublitovanie){
    console.log(poluchenieDannie);
    console.log(Dublitovanie[poluchenieDannie])
  };

  console.log(Math.random());

  //функция объекта 
  const fun = {
  age : 35,
  names : "Aleksandr",
  ['what the homeplace'] :{
    Country:"China",
    city:'中国城.',
  },





  showAllString(){  
    let showString = () =>{ 
      console.log(`возраст объекта ${this.age} лет , его имя ${this.names},место проживания в формате / страна / город  - ${names["what the homeplace"].Country}/ ${names["what the homeplace"].city}`);
      showString();}
      }
  }
  fun.showAllString();

//Функция конструктор // используется для создания - показа однотипных  переменных 
function showNo(HomePlace,city,){
  this.HomePlace = HomePlace,
  this.city = city,
  this.CurrentPositionInCompany ="Midle-drontend-developer";
}

console.log(new showNo ('Russia','Moskow'));
console.log(new showNo ('kazachstan','Almaty')); //данные функции это некий шаблон в переменные которых  мы уже в выводе добавляем нужные нам значения 
 
//тип данных String toString
const sys = 222 ;
console.log(sys.toString(32));
console.log(sys.toString(16));
//представление данных в системах  исчисления 32 бита / 16 бит / и тд
console.log(sys.toString(8));
console.log(sys.toString(2));

//спам до полного загрузки хеша 
//function xechBroken() {
  
 // console.log(Math.random())
//}
//setInterval(xechBroken,0)


//массивы 
let massiv = [
  gadzishka = 5 ,
  ['1','2','3'],
  [4,5,6],
  {
    ja:3,
    ha:5,
  },
  function obj (){
    console.log('repeat pls');
  },
  [1,23,5],
];

console.log(massiv[2]);//вывод переменной которая находится в массиве на 2 позиции 
console.log(massiv[3].array);//вывод объекта в массиве 
massiv[4]() //если в массиве есть функция то вывести ее результат можно так 
console.log(massiv[2][1]);//уонкретная позиция в переменной на 2 позиции в массиве 

console.log(massiv.length); //узнаем длинну массива 2 способами 

function dlinna() {
  return massiv.length;
};

console.log(`длинна массива состовляет ${dlinna()}`);

//меняем элемент массива 
massiv[1]=[1,2,3];
console.log(massiv);

const doc = document.querySelectorAll('.crypto-card')
console.log(doc);


const sborsol =document.querySelectorAll('h3, .cryptocurrencies');
console.log(sborsol);

const list = document.querySelectorAll('.uls > li');
console.log(list)

const pozition= document.querySelectorAll('li');
console.log(pozition[1]);

//перебераем колекции с помощью for ... of 
/*for(const perebranieZnachenia of pozition);
console.log(perebranieZnachenia);
*/

const vObj = document.querySelectorAll('.footer');
const poluchaem = vObj[0].querySelectorAll('.div');
console.log(poluchaem);

//childNodes - с помощью данной функции получаем всех детей родительского элемента 
const as = document.body
const sa = as.childNodes;
console.log(sa)

// что бы проверить дочерние - вложенные элементы существует фыункция hasChildNodes
//прописывается точно так же как и предыдущяя  
//она вернет нам либо true / false 


const eptk = document.body
const cktleozz = eptk.nextSibling // следущий элемент который на таком же уровне вложенности 
const ghtlsleobq = eptk.previousSibling // предыдущий элемент 
const hjlbnmtkm = eptk.parentNode // получение  родительского элемента 

console.log('Практика перемещения между элементами ')
console.log(cktleozz)
console.log(ghtlsleobq)
console.log(hjlbnmtkm)

//если мы хотим премещаться только между элементами не беря во внимание #text и какие либо другие символы 
//то существет функция Children 
const ltnb = document.querySelector('.uls')
const chi = ltnb.children
console.log(chi)

//если хотим перемещаться между вложенными элементами просто применяем к ним те же свойства но с Element 
console.log('Перемещение между вложенными элементами')
const elem = document.querySelector('.crypto-card__1')
const next = elem.nextElementSibling;
const previous = elem.previousElementSibling;
const parent = elem.parentElement;

console.log(next);
console.log(previous);
console.log(parent);

//перебор колекций 
console.log('преберем все теги li и выведем их в отдельную коллекцию')
const collectioP = document.querySelectorAll('li')
for(const result of collectioP){
  console.log(result);
}


//getElement s! ByTagName - поиск по тегу 
const cgbcjr= document.getElementsByTagName('li')
console.log(cgbcjr)

//метод closet будет искать и запищет в колекцию всю цепочку из родительских элементов до того
//пока не будет найден нужный нам родительский элемент или же если такогого не будет выведет null

const rodElem = document.querySelector('.under__2')
const wtgm = rodElem.closest('.uls')
console.log(wtgm) 
//часто используется для проверки на существование того или иного родителя или изминенея того или иного родителя элемента 

//проверка существования с помощью matches 
//выводит либо что прописано или же true/false 

const matchesS = document.querySelectorAll('.crypto-cards')
for(const znach of matchesS){
  if(znach.matches('[class$="crypto-card__1"]')){
    console.log('элемент сущетвует');
  } else{
    console.log('Элемент не найден - синтаксическая ошибка')
  };


}
/*
    function lastTime(){
      console.log("last time vidios D.O.M = 32:52");
      setInterval(lastTime, 600,);
    };

    lastTime();
*/

//innerHtml
//получаем содержимое объекта как оно есть ;
const ypy = document.querySelector('.crypto-card__1');//получаем элемент 
const ypyInn = ypy.innerHTML;
console.log(ypyInn);
//если хотим перезаписать значения то 
ypy.innerHTML = 'its a my opportunities'; //соотвественно получаемый элемент при перезаписи изменит свой вид и на жкране пользователя , но как таковой html
//не поменяется - изминения видны в коде не будут 

//при этом старая константа не измениться - блягодаря этогму мы можем не пререзаписывать а именно дописывать существующий элемент 
// в innerHtml мы можем прям записывать все с тегами как мы хотели бы , использовать спаны , щаголовки и тд 
ypy.innerHTML = `<p>ou ups ...</p> <p>sorry</p> <p>its a ${ypyInn}</p>`;
console.log(ypy)


//outerHtml - точно такой же как и inner но добавляется ко всему этому и получение внешней оболочки - получение элемента
//вместе с его внешними тегами div class = "..." и тд 
const out = document.querySelector('.main-title')
const newOut = out.outerHTML;
console.log(newOut)

//с помощью .data - мы можем работать с текстовыми узлами или же коментариями  
const dat = document.querySelector('.crypto-card__1')
const nexti = dat.nextSibling;
console.log(nexti)

//что бы получить сам текст комментария мы используем .data 
console.log(nexti.data)
console.log('получаемый текст коментария ^ ');

//перезапишем коммент
nexti.data = 'wtf?';
console.log(nexti)

//что бы создать новый элемент , узел 
//используем тег createElelement
const opredeli = document.createElement('div') //в скобках  обязательно указываяем какой тег хотим создать
opredeli.innerHTML = `its a new element` //вписываем в новосозданный эелемент текст 

//если мы хотим полностью создать новый узел то прописываем следущее 
const textNode = document.createTextNode('newUzel'); // только теперь мы пишем не имя тега а то какую строку хотим создать 
console.log(textNode);
//на данномс этапе информация не вставлена в документ 
//инфо определенна в константы котрые не видны 
//все это деалем с помощью тегов - вставок 


//вставка элемнта в объект который мы оределили 
dat./*before / after / prepend / append */ prepend(textNode)

//так же можно сразу вставлять несколько фрагментов  сразу 
dat.after(textNode,' wow');

//Но вставлять текст гораздо удобнее методом insertAdjasmentHtml 
const insr = document.querySelector('.subtitle')
insr.insertAdjacentHTML(
  'afterend', // куда вставляется объект
  `<div><p>its a new text) or no ?</p>`, //не забываем про висящюю запятую 
);

//так же существуют и теги для вставки insertAdjacenText и insertAdjacentElement

//еще мы можем переносить узлы с одного мета в дргое с помощью методов вставки 
//определяем объекты 
const pere = document.querySelector('.container')
const fg = document.querySelector('.scroll-down')

pere.append(fg); // перенесенный элемент автоматически удалиться со старого места и у нас не будет 2-х одинаковых  элементов 

//так же мы можем клонировать элемент если нам это понадобиться 
//можем это делать как с содержимым так и без него 

//определяем объект 
const notClone = document.querySelector('.crypto-card__2')
const itsAClone = notClone.cloneNode()//копирование без содержимого 
const vstavks = document.querySelector('.crypto-cards')
vstavks.prepend(itsAClone) //сначала указываем объект в который хотим поместить клона / дальше метод вставки - в какое место / а дальше уже что хотим клонировать 

//если мы хотим клонировать вместе с содержимым то используем метод глубокого клонирования и в строку с .cloneNode в скобки добавляем (true)
//const itsAClone = notClone.cloneNode(true)
//                                     ^^^^

//если нам нужно удалить объект то просто определяем его и прописываем метод remove();
const deleteCard = document.querySelector('.crypto-card__2');
deleteCard.remove(); // в данном случае удалиться карточка которую мы создали в предыдущем дествие 


//ТАК ЖЕ В JS МЫ МОЖЕМ ПЕРЕЗАПИСЫВАИТЬ КЛАССЫ И ИХ СТИЛИ наиболее часто именно это и делают 
//свойство  className - не удобно использовать так как оно удаляет все классы с тем именем которое присвоенно элементу , а элементов с таким классом может быть много 
//так что используем метод classList и его подметоды 

const classPere = document.querySelector('.about h2')
classPere.classList.add('active') //добавляем класс 
//classPere.classList.remove('active')  удаляем его 
//метод toogle добавит класс если его не было, а если такой уже есть - удалит 
//и метод contains -проверка на наличие класса - возращает true / false 

//метод classList - перебераемый по этому мы можем использовать функцию for ... of 

//ELEMENT.STYLE -данное свойство нам открывает путь к изминению стилей через js 
const stelles = document.querySelector('.loading__dot') // определяем объект у которого хотим изменить стили 
const childrensS = stelles.children;/*//в данном случае надо определить дочерние элементы у которых  и будуть изминения */ 




console.log(childrensS)///спросить у ЕГИЧА  11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
stelles.style.color = "blue";
//childrensS.style.color = "red";                               ???????


//моежем менять элементы через указание позиции ????????????????




//Если свойства состоят из 2 и более свойст указываем их через стиль camelCase - marginBottom & ltd.
//                                                                        ^            ^

//если нужно сбросить то или иной стиль то просто присваемваем пустую строку 
stelles.style.color = "";

//так же мы можем получить значение свойства просто прописав его как некий путь - но получим мы это значение если оно присвоено через атрибут styleметодом из примера выше
//console.log(stelles.style.color) // blue 
 
//так же есть метод cssText 
// удобен тем что намкаждый раз не нужно записывать свойства как на примерах вверху 
//но у данного метода свой минус - он обнулит все свойства которые раньше были записаны в style и применит только те которые мы запишем в cssText 
stelles.style.cssText = 
`
margin:10px ;
color:red;
`;

//last 57 минута 