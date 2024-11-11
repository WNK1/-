/*window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 2500);
  });*/

//размеры окна в браузере 
//свойство clientWidth clientHieght - доступная ширина и высота экрана  
const html = document.documentElement // в константу мы получаем documentElement - фактически мы обращаемся ко всему html 
const elementWidth = html.clientWidth;//узнаем доступную ширину 
const elementHigth = html.clientHeight;//высоту

console.log(elementWidth)
console.log(elementHigth)

//так же существуют свойства innerWidth и innerHeight - они включают в себя ширину и высоту но уже с полосами прокрутки а не как прошлые свойства 
const innerH = window.innerWidth; //применяются с тегом window который обозначает область экрана / в данном методе его использовать обязательно
const innerW = window.innerHeight;

console.log(` размерыы экрана вместе с полосой прокрутки `)
console.log(innerH)
console.log(innerW)

//если нам нужно получить количество прокрученых пиксилей то используем методы :
const y = window.scrollY;
const x = window.scrollX;
console.log(`узнаем сколько пикселей было прокручино по оси y и x`)
console.log(y)
console.log(x)

//методы прокрутки страницы , при задании какого то события 
//scrollBy scrollTo+опиции 
//метод scrollBy - каждый раз при ивенте будет прокручивать страницу на кординаты которые мы зададим 
function bottom (){
    const gg = window.scrollY;
    window.scrollBy(0,50) //данный метод прокручивает страницу каждый раз на 50px , то есть сначала он прокрутит и страница уйдет 
    console.log(gg)       //на 50px вниз а если еще раз сделать данное действие то страница еще раз опуститься / но еще на 50px суммрно на 100px
                            

}

function bottom (){
    const gg = window.scrollY;
    window.scrollTo(0,50)  //данный меод прокручивает страницу отностительно ее начальных кординат и только 1 раз 
    console.log(gg)

}

//что бы применить опции к scrollTo нужно немного изменить синтаксис 
function bottom (){
    const gg = window.scrollY;
        //(и тут взаместо значений созадем объект в котором и перечисляем свойства ) 
    window.scrollTo({
        top:120,
        left:0,
        behavior:"smooth", //или instant //данные свойства отвечают за плавность или резкость прокрутки с помощью данного тега
    }
    )
    console.log(gg)

}

//scrollInterviwe - данная функция прокручивает уже не на какое то расстояние , а к определенному элементу 
function cruptocurencies(top){
    const block = document.querySelector('.cryptocurrencies') //определяем объект к которому хотим что бы происходил скролл 
    //далее прописываем переменную в которой определили объект и сам scrollInterview
    block.scrollIntoView(top)
} //данная функция принимает 2 значения либо true - прокрутит до объекта так что сам объект будет вверху окна браузера
  // или же false что сам объект будет снизу 

  //так же как и к scroll мы моежм применить доп параметры / синтаксис будет как в прошлый раз 
  function cruptocurencies(top){
    const block = document.querySelector('.cryptocurrencies') //поределяем объект к которому хотим что бы происходил скролл 
    //далее прописываем переменную в которой определили объект и сам scrollInterview
    block.scrollIntoView({
        block:"center", // прокрутка по вертикали 
        inline:"center", // может принимать значения start centre end & nearist по умолчанию-centre //прокрутка по горизонтали
        behavior:"smooth", // анимация прокрутки плавная или резкая 

    })
  }


  //метрики объектов - размеры определенных отступов , и всех доп css свойств которые могут быть в элементе  
  //для начала определяем объект в котором хотим узнать метрики 
  const mericks = document.querySelector('.cryptocurrencies')

  //далее мы создаем константу в которую передаем занчения offsetParent - offsetTop , offsetLeft 
  // это на сколько пискселей удален элемент от ближайшего родительского элемента

  const offsetParent = mericks.offsetParent;
  console.log(offsetParent) //покажет относительно какого родителя позиционирует наш элемент
  const offsetLefts = mericks.offsetLeft; //на скольок пиксилей позиционирован наш блок снаружи относительно род элемента от левого края 
  const offsetTops = mericks.offsetTop; // от вверха 
  console.log(offsetTops);
  console.log(offsetLefts);

  //теги offsetWidth & offsetHeight - включают в себя и border и внутрюнюю полосу прокрутки , проще сказать включают в себя общий размерь всего контента блока 
//без его размера - чисто контент 

//clientTop clientLeft - получаем внутриние отступы объекта  от его внешней части - они возвращают не размеры рамки так скажем , а именно о отсупы внутреней части от внешней 
//clientWidth clientHeight - размеры блока без рамок и полос прокрутки - так скажем внутриний размеры  текста от всего что находится в самом блоке 


///////////КООРДИНАТЫ 
//они работают либо относительно окна браузера //clientX clientY
//или же же относительно документа - объекта  // pageX pageY

//координаты относительно окна браузера 
const otnositel = document.querySelector('.crypto-cards')
const itemX = otnositel.getBoundingClientRect() //в данном случае мы получаем абсолютно все координаты позиционирования объекта относительно род элемента 
console.log(itemX);

//так же можем получить координаты определенного свойства , например left 
const itemTop = otnositel.getBoundingClientRect().top;  //при скроле значеня будут динамически менятся
console.log(itemTop); //почему результат - ??


//если нам нужна координата относительно объекта / а не страницы мы ее можем получить прибавив + window.pageYoffset - размер прокрученых пикселей 
const OtnsObj = itemTop + window.scrollY;
console.log(itemTop)

//метод elementFromPoint - узнаем элемент который находится под заданной координатой 
const coord = document.elementFromPoint(279,279/*указываем x,y*/);
console.log(coord) // но объект будет всегда другой , так как расположения объекта в данном методе зависит от окна браузера 
//




///СОБЫТИЯ  - EVENTLOOP И ТАК ДАЛЕЕ 
//js понимает когда происходит событие с помощью обработчиков - котрорые и так скажем перехватываеют наши действия  
//определяем обеъкт к которому будет привязано действие 
const button = document.querySelector('.istBaton')

/*//далее обращаемся к этой константе , ставим точку и прописываем опрератор например onclick 
button.onclick = function(){
  console.log('была нажата кнопка')
}

//так же мы можем это реализовать с помощью прописанной изначально функции а уже потом присвоению onclick 

function showe(){
  console.log('на кнопку только что нажали')
};

button.onclick = showe ; */
 //но данные примеры не особо подходят и используются так как перезаписывают друг друга и невозможно повесить несколько событий на один элемент
 
 
 
 
 
 
 //Вот решение : addEventListener

 //1 - определяем элемент на который хотим подвязать событие 
 //2 - прописываем контанту .addEventListener 
 //( в скобках сначала указываем обработчик - само действие , указываем лиюо саму функцию либо же ее имя и прописываем что она должна будет сделать )

 button.addEventListener('click',function bvg(){
  console.log('действие выполнено ')
  button.removeEventListener('click' , bvg)
 });
 button.addEventListener('click',function bvh(){
  console.log('конопка была нажата ')
  button.removeEventListener('click', bvh)
 })
//после выполниния действий функции прекратят выполняться  
 //метод removeAddEventListener - существеет для того что бы либо убать действие либо же так сажем отключить слежку за объектом после выполниния события 
 //например как в примере выше сделать так что бы события в консольных логах отобразились 1 раз , а потом это все прекратилось  