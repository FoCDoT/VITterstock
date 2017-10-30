var username;
var password;
var name1;
var name2;
var name3;
var dob;
var country;
var city;
var address;
var mobile;
var button;
var gender;
username = document.querySelector("#username");
password = document.querySelector("#password");
name1 = document.querySelector("#name1");
name2 = document.querySelector("#name2");
name3 = document.querySelector("#name3");
dob = document.querySelector("#dob");
country = document.querySelector("#country");
city = document.querySelector("#city");
address = document.querySelector("#address");
mobile = document.querySelector("#mobile");
button = document.getElementByTagName("button");
gender = document.querySelector("#gender");
function myFunction()
{
	console.log(username.value);
	console.log(password.value);
	console.log(name1.value);
	console.log(name2.value);
	console.log(name3.value);
	console.log(dob.value);
	console.log(country.value);
	console.log(city.value);
	console.log(address.value);
	console.log(mobile.value);
};

