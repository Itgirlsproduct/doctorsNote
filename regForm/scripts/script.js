document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const form = document.querySelector("form");
    const pass = form.querySelector(".input-password");
    const pass2 = form.querySelector(".input-password2");
    const register = form.querySelector(".app-btn");

    let isValidate = true;

    const regExpName =
    /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
    const regExpEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regExpPass =
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    const regExpPhone =
      /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    const submit = () => {
      alert("Добро пожаловать!");
    };

    function doctorsPage(){
      window.location.href = "https://itgirlsproduct.github.io/doctorsNote/createPatient/index.html";
    }

    const yourEmail = document.querySelector(".input-email");
    const yourPass = document.querySelector(".input-password");

    register.addEventListener("click", () => {
      localStorage.setItem("email", yourEmail.value);
      localStorage.setItem("passw", yourPass.value);
    });

    const formState = {
        name: true,
        email: true,
        phone: true,
        password: true,
        password2: true
    };

    const validateElem = (elem) => {
      if (elem.name === "name") {
        if (!regExpName.test(elem.value) && elem.value != "") {
          elem.nextElementSibling.textContent =
            "Введите корректное имя пользователя!";
          formState[elem.name] = false;
        } else {
          elem.nextElementSibling.textContent = "";
          formState[elem.name] = true;
        }
      }
      if (elem.name === "email") {
        if (!regExpEmail.test(elem.value) && elem.value != "") {
          elem.nextElementSibling.textContent = "Введите корректный email!";
          formState[elem.name] = false;
        } else {
          elem.nextElementSibling.textContent = "";
          formState[elem.name] = true;
        }
      }

      if (elem.name === "phone") {
        if (!regExpPhone.test(elem.value) && elem.value != "") {
          elem.nextElementSibling.textContent =
            "Введите телефон в формате +7 000-000-00-00";
          formState[elem.name] = false;
        } else {
          elem.nextElementSibling.textContent = "";
          formState[elem.name] = true;
        }
      }

      if (elem.name === "password") {
        if (!regExpPass.test(elem.value) && elem.value != "") {
          elem.nextElementSibling.textContent = 
          "Пароль не соответствует ";
          formState[elem.name] = false;
          console.log(elem.nextElementSibling.textContent);
        } else {
          elem.nextElementSibling.textContent = "";
          formState[elem.name] = true;
        }
      }
      if (elem.name === "password") {
        if (pass.value != pass2.value && pass2.value != "") {
          pass.nextElementSibling.textContent = "Пароли не совпадают!";
          pass2.nextElementSibling.textContent = "Пароли не совпадают!";
          formState[elem.name] = false;
        } else {
          pass.nextElementSibling.textContent = "";
          pass2.nextElementSibling.textContent = "";
          formState[elem.name] = true;
        }
      }

      if (elem.name === "password2") {
        if (pass.value != pass2.value && pass2.value != "") {
          pass.nextElementSibling.textContent = "Пароли не совпадают!";
          pass2.nextElementSibling.textContent = "Пароли не совпадают!";
          formState[elem.name] = false;
        } else {
          pass.nextElementSibling.textContent = "";
          pass2.nextElementSibling.textContent = "";
          formState[elem.name] = true;
        }
      }
    };

    for (let elem of form.elements) {
      if (elem.tagName != "BUTTON" && elem.tagName != "SELECT") {
        elem.addEventListener("blur", () => {
          validateElem(elem);
        });
      }
    }

    register.addEventListener("click", function (event) {
      event.preventDefault();
      let isValidateForm = true;

      for (let elem of form.elements) {
        if(formState[elem.name]==="") {
            isValidateForm = false;
        }
        if (elem.tagName != "BUTTON" && elem.tagName != "SELECT") {
          if (elem.value === "") {
            isValidateForm = false;
            elem.nextElementSibling.textContent =
              "Данное поле не заполнено!";
          } else {
            elem.nextElementSibling.textContent = "";
          }
        }
      }

      if (isValidateForm) {
        submit();
        doctorsPage();
        form.reset();
      } else {
        alert("Заполните все поля формы");
      }
    });
  });
