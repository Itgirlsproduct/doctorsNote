document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const form = document.querySelector('form');
    const pass = form.querySelector(".input-password");
    const pass2 = form.querySelector(".input-password2");

    const regExpName = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig;
    const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regExpPass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}\$/;   

    const validateElem = (elem) => {
        if(elem.name === "name") {
            if(!regExpName.test(elem.value) && elem.value != "") {
                elem.nextElementSibling.textContent = "Введите корректное имя пользователя!";
            } else {
                elem.nextElementSibling.textContent = "";
            }
        }
        if(elem.name === "email") {
                if(!regExpEmail.test(elem.value) && elem.value != "") {
                    elem.nextElementSibling.textContent = "Введите корректный email!";
                } else {
                    elem.nextElementSibling.textContent = "";
                }
        }
    
        if(elem.name === "password") {
                if(!regExpPass.test(elem.value) && elem.value != "") {
                    elem.nextElementSibling.textContent = "Введите корректный пароль!";
                } else {
                    elem.nextElementSibling.textContent = "";
                }
            }
        if(elem.name === "password") {
            if(pass.value != pass2.value && pass2.value != '') {
                elem.nextElementSibling.textContent = "Пароли не совпадают!";
            } else {
                elem.nextElementSibling.textContent = "";
            }

            if(!regExpPass.test(elem.value) && elem.value != "") {
                elem.nextElementSibling.textContent = "Введите корректный пароль!";
            } else {
                elem.nextElementSibling.textContent = "";
            }   
        }
    
        if(elem.name === "password2") {
            if(pass.value != pass2.value && pass2.value != '') {
                elem.nextElementSibling.textContent = "Пароли не совпадают!";
            } else {
                elem.nextElementSibling.textContent = "";
                console.log(pass2);
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
                } else {
                  elem.nextElementSibling.textContent = '';  
                }
            }
        }
    
    });
});