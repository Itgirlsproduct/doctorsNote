let patients = [];
loadData();
commentadd.addEventListener('click',() =>{

   let dataSurname =  document.getElementById('data-surname'); 
   let dataName = document.getElementById('data-name');
   let dataLastname = document.getElementById('data-lastname');
   let dataPhone = document.getElementById('data-phone');

   let patient= {
    name : dataSurname.value,
    surname : dataName.value,
    lastname : dataLastname.value,
    phone : dataPhone.value,
    time : Math.floor(Date.now()/1000)
   }
   dataSurname.value = '';
   dataName.value = ''; 
   dataLastname.value = ''; 
   dataPhone.value = ''; 
   patients.push(patient);
  saveData();
  showData();
});
function saveData(){
   localStorage.setItem('patients', JSON.stringify(patients)); 
   showData();
}
function loadData() {
    if (localStorage.getItem('patients')) patients = JSON.parse(localStorage.getItem('patients')) ;
}
function showData(){
   let commentField = document.getElementById('comment-field');
   let out = '';
   patients.forEach(function(item){
out += `<li class="dataPatient"><input type="checkbox" id="todo_1"/>
<p><em>${item.name}</em></p>
<p><em>${item.surname}</em></p><p><em>${item.lastname}</em></p><p>${item.phone}</p><p><em>${timeConverter(item.time)}</em></p>  <i class="far fa-trash-alt delete"></i></li>`;

   });
   commentField.innerHTML = out;
}
function timeConverter(UNIX_timestamp ){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;

}
clearStorage.addEventListener('click',() =>{
   
    localStorage.clear();
   
})