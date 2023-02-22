let form = document.getElementById('form'),
    name = document.getElementById('name'),
    email = document.getElementById('email'),
    phone = document.getElementById('tel'),
    password = document.getElementById('password'),
    password2 = document.getElementById('password2');
const formAdd=true;    




    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const passedChecks = checkInputs();
        let user = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          tel: document.getElementById("tel").value,
          pass: document.getElementById('password'),
          pass2: document.getElementById('password2')
        }});
      //  fetch("https://httpbin.org/post", {
       //   method: "POST",
       //   body: JSON.stringify(user),
      //    headers: {
      //      "Content-Type": "application/json; charset=utf-8",
      //    },
      //  })
      //    .then((response) => response.json())
      //    .then((user) => {
      //      console.log(user);
      //    })
      //    .catch((error) => console.log(error));
     // });

      function checkInputs() {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const telValue = tel.value.trim();
        const passwordValue = password.value.trim();

        if (nameValue === "") {
          setErrorFor(name, "Имя пользователя не заполнено");
        } else {
          setSuccessFor(name);
        }

        if (emailValue === "") {
          setErrorFor(email, "Email не заполнен");
        } else if (!isEmail(emailValue)) {
          setErrorFor(email, "Ошибка в email");
        } else {
          setSuccessFor(email);
        }
        if (telValue === "") {
            setErrorFor(tel, "Введите номер телефона");
          } else {
            setSuccessFor(tel);
          }

        if (passwordValue === "") {
          setErrorFor(password, "Пароль не заполнен");
        } else {
          setSuccessFor(password);
        }

        if (password2Value === "") {
          setErrorFor(password2, "Пароль не заполнен");
        } else if (passwordValue !== password2Value) {
          setErrorFor(password2, "Пароли не совпадают");
        } else {
          setSuccessFor(password2);
        }
      }

      function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = message;
      }

      function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
      }

      function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      }