/** 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.*/

// const elemById = document.getElementById('super_link');
// console.log(elemById);

/** 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".*/

// const elemAll = document.querySelectorAll('.card-link');
// elemAll.forEach((value) => {
//     value.textContent = 'ссылка';
// })

// Array.from(elemAll).forEach((value) => {value.textContent='ссылка'})


/** 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.*/

// const body = document.querySelector('.card-body');
// const links = body.querySelectorAll('.card-link');
// console.log(links);

/** 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.*/

// const firstElem = document.querySelector('[data-number="50"]');
// console.log(firstElem);

/** 5. Выведите содержимое тега title в консоль.*/

// const title = document.querySelector('title');
// console.log(title.textContent);

/** 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.*/

// const parent = document.querySelector('.card-title').parentElement;
// console.log(parent);


/** 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".*/

// const parentEl = document.querySelector('.card')
// const newTag = document.createElement('p');
// newTag.textContent = "Привет";
// parentEl.prepend(newTag);

/**8. Удалите тег h6 на странице. */

// const tagDel = document.querySelector('h6');
// tagDel.remove();