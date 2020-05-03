// Bussiness logi
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//User interface logic
function checkNames(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value)
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
};

if(day <= 0 || day >31){
    alert("Put the valid day")
}
else if(month <=0 || month >12 || (month == 2 && day > 29)){
    alert("Put the valid month..")
}

var newDate = new Date(day + "/" + month + "/" + year);
var d = getDay.getDay()

if(male.checked == true){
    alert("You were born on " + daysOfTheWeek[d] + "and your Akan name will be: " + maleNames);
    document.getElementById("akan").innerHTML = "You were born on " + daysOfTheWeek[d] + "and your Akan name will be: " + maleNames[d];
}
else if(female.checked == true){
    alert("You were born on " + daysOfTheWeek[d] + "and your Akan name will be: " + femaleNames);
    document.getElementById("akan").innerHTML = "You were born on " + daysOfTheWeek[d] + "and your Akan name will be: " + femaleNames[d];
}