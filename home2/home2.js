/**1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов. */

const listDropDown = document.querySelectorAll('.dropdown-item');
console.log(listDropDown);
listDropDown.forEach((value) => {
    value.classList.add('super-dropdown');
})

/**2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было. */

const classBtn = document.querySelector('.btn');
classBtn.classList.toggle('btn-secondary');

/**3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu". */

const menu = document.querySelector('.menu');
menu.classList.remove('dropdown-menu');

/**4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>` */

const dropDown = document.querySelector('div.dropdown');
dropDown.insertAdjacentHTML('afterend', '<a href="#">link</a>');

/**5. У элемента с id "dropdownMenuButton" замените id на "superDropdown". */
const elemId = document.querySelector('#dropdownMenuButton');
elemId.id = 'superDropdown';

/**6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset. */

const atribute = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
if(atribute){
    atribute.dataset.dd = 3;
};

/**7. Удалите атрибут type у элемента с классом "dropdown-toggle". */

const dropDownToggle = document.querySelector('.dropdown-toggle');
if(dropDownToggle && dropDownToggle.getAttribute('type')){
    dropDownToggle.removeAttribute('type');
}