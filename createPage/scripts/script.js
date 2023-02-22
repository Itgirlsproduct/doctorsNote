document.addEventListener("DOMContentLoaded", () => {
   fetch("https://randomuser.me/api/?results=15")
      .then(response => {
         return response.json();
      })
      .then((patientdata) => {
         let arrayPatients = patientdata.results;
         let patientContainer = "";
         for (let patient of arrayPatients) {
            patientContainer += `<div class="patient"><img  class="avatar" src=${patient.picture.large}>
   <div><strong>Имя:</strong>${patient.name.first}</div>
       <div><strong>Фамилия:</strong>${patient.name.last}</div>
       <div><strong>Email:</strong>${patient.email}</div>
   <div><strong>Адрес:</strong>${patient.location.country}</div>
   <div><strong>Возраст:</strong>${patient.registered.age}</div>
   <div><strong>Телефон:</strong>${patient.phone}</div>

</div></div>`;

         }
         document.getElementById("patientContainer").innerHTML = patientContainer;

      })
      .catch(error => console.log(error));
});

function onDelete() {
   document.querySelector("#result").innerHTML = '';
}