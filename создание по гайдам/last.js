//что бы получить колекцию форм нам нужно воспользоваться методом .forms - данный метод является единственно правельным так как он динамический 
//что бы форма была видима html и js нужно обособить ее в тег   <form>...<form/>  в html
const allForms = document.forms[0] //тут мы обращаемся к конкретной форме 
console.log(allForms)

//так же можем искать форму по имени тогда в input должен быть обозначен атрибут name --
//const allForms = document.forms.name
//console.log(allForms)

//что бы получить элементы формы - все что в ней содержится , получаем все это таким способом :
const elemForms = document.forms.bur; //получам коллекцию форм под определенным названием
console.log(elemForms.elements) //получаем коллекцию элементов в данной форме 

//получаем конкретный элемент формы при обращению и поиск про тегу name в инпуте 
const konkretElem = elemForms.elements.who;
console.log(konkretElem);

//что бы получить родительский объект - всю форму то делаем следущее 
//вписывем например константу и обращаемся наприму. к форме 
console.log(konkretElem.form);  //спросить почему значение неопределенно ??????????????????????????????????????????????????????????????????????????????????



//работа с input и textarea 
