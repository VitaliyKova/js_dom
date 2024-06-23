/**1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться. */

const input = document.querySelector('[id="from"]');
const span = input.nextElementSibling;

input.addEventListener("input", (e) => {
  const currentValue = e.target.value;
  span.textContent = currentValue;
});

/**При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/

const btn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

btn.addEventListener("click", () => {
  message.classList.add("animate_animated", "animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

/**3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */

const form = document.querySelector("form");
const inputFields = document.querySelectorAll(".form-control");
const btnSubmit = document.querySelector(".submit");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkingForm(inputFields)) {
    form.submit();
  }else console.log('message');
});

const checkingForm = (input) => {
    let flag;
  input.forEach((item) => {
    if (item.value) {
      flag = true;
    } else {
      item.classList.add("error");
      flag = false;
    }
  });
  return flag;
};

inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.value) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
});
