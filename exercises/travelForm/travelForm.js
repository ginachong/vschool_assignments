

// var submitButton = document.getElementById("submitButton");
var gender = document.flyer.gender.value;
var cities = document.flyer.cities;
var checkedCitiesList = [];
var diet = document.flyer.diet;
var checkedDietList = [];

function checkedCities(){
    for(var i = 0; i < checkedCitiesList.length; i++){
        if(cities[i].checked == true)
            checkedCitiesList.push(cities[i]);
    }
    return checkedCitiesList;
}

function checkedDiet(){
    for(var i = 0; i < checkedDietList.length; i++){
        if(diet[i].checked == true)
            checkedDietList.push(diet[i]);
    }
    return checkedDietList;
}

var flyerObject = {
    firstName: document.flyer.firstName.value,
    lastName: document.flyer.lastName,
    age: document.flyer.age,
    gender: document.flyer.gender,
    location: checkedCities().toString(), //.join()
    diet: checkedDiet().toString()
}

document.flyer.addEventListener("submit", function(e){
    e.preventDefault();
    var flyerObject = {
        firstName: document.flyer.firstName.value,
        lastName: document.flyer.lastName.value,
        age: document.flyer.age.value,
        gender: document.flyer.gender.value,
        location: checkedCities().toString(), //.join()
        diet: checkedDiet().toString()
    };
    alert(
        `First Name: ${flyerObject.firstName}
         Last Name: ${flyerObject.lastName}
         Age: ${flyerObject.age}
         Gender: ${flyerObject.gender}
         Location: ${flyerObject.location}
         Dietary Restrictions: ${flyerObject.diet}
        `
    )
})

//document.flyer.submitButton is not valid. WHY??


//idea: either have to do form.addEventListener("submit") 
//(not good idea because page will refresh)

//rather, do form.submit.addEventListener("click")

