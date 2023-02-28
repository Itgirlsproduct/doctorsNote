document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const form = document.querySelector('form');
    const pass = form.querySelector(".input-password");
    const pass2 = form.querySelector(".input-password2");
    let isValidate = false;

    const regExpName = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
    const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regExpPass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}\$/;   

    const submit = () => {
        alert("Добро пожаловать!");
    }

   
    const validateElem = (elem) => {
        if(elem.name === "name") {
            if(!regExpName.test(elem.value) && elem.value != "") {
                elem.nextElementSibling.textContent = "Введите корректное имя пользователя!";
            } else {
                elem.nextElementSibling.textContent = "";
                isValidate = true;
            }
        }
        if(elem.name === "email") {
                if(!regExpEmail.test(elem.value) && elem.value != "") {
                    elem.nextElementSibling.textContent = "Введите корректный email!";
                    isValidate = false;
                } else {
                    elem.nextElementSibling.textContent = "";
                    isValidate = true;
                }
        }
    
        if(elem.name === "password") {
                if(!regExpPass.test(elem.value) && elem.value != "") {
                    elem.nextElementSibling.textContent = "Введите корректный пароль!";
                    isValidate = false;
                } else {
                    elem.nextElementSibling.textContent = "";
                    isValidate = true;
                }
            }
        if(elem.name === "password") {
            if(pass.value != pass2.value && pass2.value != '') {
                pass.nextElementSibling.textContent = "Пароли не совпадают!";
                pass2.nextElementSibling.textContent = "Пароли не совпадают!";
                isValidate = false;
            } else {
                pass.nextElementSibling.textContent = "";
                pass2.nextElementSibling.textContent = "";
                isValidate = true;
            }

            if(!regExpPass.test(elem.value) && elem.value != "") {
                elem.nextElementSibling.textContent = "Введите корректный пароль!";
                isValidate = false;
            } else {
                elem.nextElementSibling.textContent = "";
                isValidate = true;
            }   
        }
    
        if(elem.name === "password2") {
            if(pass.value != pass2.value && pass2.value != '') {
                pass.nextElementSibling.textContent = "Пароли не совпадают!";
                pass2.nextElementSibling.textContent = "Пароли не совпадают!";
                isValidate = false;
            } else {
                pass.nextElementSibling.textContent = "";
                pass2.nextElementSibling.textContent = "";
                isValidate = true;
            }
        }
        };

    for(let elem of form.elements) {
        if(!elem.classList.contains("input input-phone") && elem.tagName != 'BUTTON' && elem.tagName !='SELECT') 
        {
            elem.addEventListener('blur', () => {
                validateElem(elem);
            });
        }
    }
 

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        for(let elem of form.elements) {
            if(!elem.classList.contains("input input-phone") && elem.tagName != 'BUTTON' && elem.tagName !='SELECT') 
            {
                if(elem.value === '') {
                  elem.nextElementSibling.textContent = 'Данное поле не заполнено!';
                  isValidate = false;
                } else {
                  elem.nextElementSibling.textContent = '';  
                  isValidate = true;
                }
            }
        }
    if(isValidate) {
        //if(form.querySelector('.custom-dropdown big').value) {
        submit();
        form.reset();
    } else {
        alert('Выберите специализацию');
    }
     

    });
});

      function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      }