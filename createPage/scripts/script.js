/*let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Age";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Male|Female";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Address";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "23";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "F";
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "Whasington";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2.";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "65";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "M";
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "Moscow";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2)
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3); */
document.addEventListener("DOMContentLoaded" ,() => {
    fetch ("https://randomuser.me/api/?results=15")
    .then(response=> {
        return response.json();
    })
    .then ((patientdata) =>{
        let arrayPatients = patientdata.results;
        console.log(arrayPatients);
        console.log(patientdata.results[0].cell);
        //let heroes =JSON.parse(myJson);
let patientContainer = "";
for (let patient of arrayPatients){
    patientContainer +=`<div class="patient"><img  class="avatar" src=${patient.picture.large}>
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
function onDelete(){
    document.querySelector("#result").innerHTML = '';
}