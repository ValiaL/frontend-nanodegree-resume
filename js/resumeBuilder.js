//$("#main").append("Valia Lekka");
//var awesomeThoughts = "I am Valia and I am awesome";
//var funThoughts = awesomeThoughts.replace("awesome","fun");
//$("#main").append(funThoughts);
//console.log(awesomeThoughts);
//console.log(funThoughts);

/*var name = "Valia Lekka";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/
/*
var fullString = "Audacity";
var FirstLetter = fullString.slice(1,-6);
var slicedString = fullString.slice(2);
var CapitalizedString = FirstLetter.toUpperCase();
var finalString = CapitalizedString.concat(slicedString);
console.log(finalString);*/




/*var sampleString = "cAmerON PITtMaNN";

var capitalizeCorrectly = function(_string) {
	var firstName = "";
	var lastName = "";
    var finalName = "";
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turn into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
   var indexOfSpace = _string.indexOf(" ");
   console.log(indexOfSpace);
   firstName = _string.slice(0,1).toUpperCase() + _string.slice(1,7).toLowerCase();
   lastName = _string.slice(8).toUpperCase();

   finalName = firstName + " " + lastName;

   console.log(firstName);
   console.log(lastName);

    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(capitalizeCorrectly(sampleString));*/


var bio = {
    "name" : "Valia Lekka",
    "role": "Web Developer",
    "contacts": {
           "email" : "valia_lekka@yahoo.com",
           "phone number" : "6945859995",
           "github" : "ValiaL",
           "location" : "Athens, Greece"      
    },
    "WelcomeMessage": "I am a web developer. Hi!",
    "skills": ["Procrastination","Laziness","High Self-confidence"]
};

$("#main").append(bio.name);

//$("#header").append(bio.role);
//$("#workExperience").append(bio.skills);
//$("#letsConnect").append(bio.WelcomeMessage);
