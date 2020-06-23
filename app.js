// // ======= chapter 25 to 25
// var user_name = prompt("What's your full name ");
// alert("GOOD MORNING, "+ user_name)


// // task 2
// var user_phone = prompt("What's your favraite mobile phone model"),
//     len = user_phone.length;

// document.write("My favraite mobile phone is " + user_phone + "<br> and string length is " + len);    

// //  task 3

// var country = "Pakistan";

// document.write("String : "+ country);
// document.write("<br> Index no of : "+ country.indexOf("n"));

// // task 4

// var country = "Hellow world";

// document.write("String : "+ country);
// document.write("<br> Last occurance of leter L: "+ country.lastIndexOf("l"));
// var country = "Pakistan";
// document.write("String : "+ country);
// document.write("Character at 3rd position is: "+ country.charAt(3));

// // task 6

// var greet = ["Good Morning "],
//     name = [user_name];
//     alert("<br> " +greet.concat(name));

// // task 7


// var city = "hyderbad"
// var replace  = city.replace("hyder","islam")

// document.write("<br> City name " + city + " <br> After replace " + replace)

// task 8

// var city = "Ali and Sami are best friends. They play cricket and football together"

// var replace =city.replace(/and|_/g,'&');

// document.write("<br> <b>Sentance before replacement:</b>  "+city)
// document.write("<br > <b>Sentance after replacement</b>   " + replace)

// task 9

// var value_str = "456";
// var value_num = Number(value_str)

// document.write("Value: " + value_str + "<br> Type: " + typeof value_str);
// document.write("<br>  Value: " + value_num + "<br> Type: " + typeof value_num);


// task 10

// var user = "peanut",
//     user_upper = user.toProperCase();

// document.write("<br> User input: " + user +"<br> Uppercase: " + user_upper);
    
//task 11

// var value_num = 33.36;


// var value_str = String(value_num)
// var value_str = value_str.replace(/.|_/g,'3')
// document.write("Number: " + value_num );

// document.write("<br>  String: " + value_str );

// var user_name =prompt("Enter User name ")

// if( user_name.indexOf("@") ===-1 || user_name.indexOf(".") ===-1 || user_name.indexOf(",") ===-1 || user_name.indexOf("!") ===-1 ){
//     alert("Your user name is valid")


// }
// else{

//     alert("Please enter valid youser name")
// }


//// =========== chapter 26 to 30


//task 1

// var user_num = +prompt("Enter any positive number");
// if(user_num > 0){
//     document.write("Number: " +user_num)
//     document.write("Round off: " +Math.round(user_num))
//     document.write("Floor value: " + Math.floor(user_num))
//     document.write("celi value: " + Math.ceil(user_num))
//     }
//     else{
//         alert("enter negative number")
//     }
    
// //task 2

// var user_num = +prompt("Enter nagative number");
// if(user_num <0){
// document.write("Number: " +user_num)
// document.write("Round off: " +Math.round(user_num))
// document.write("Floor value: " + Math.floor(user_num))
// document.write("celi value: " + Math.ceil(user_num))
// }
// else{
//     alert("enter negative number")
// }

//task 3

// var user_num = +prompt("Enter any number")
// document.write("Absolute value: " + Math.abs(user_num))


// task 4

// var random = Math.random()*7
// document.write("Dice value: " + Math.floor(random))

// // task 5
// var random = Math.random()*2
// if ( Math.floor(random)  == 1){

//     document.write("Dice value: head ")

// }

// else {

//     document.write("Dice value: Tails ")

// }

// task 6

// var random = Math.random()*101
// document.write("Random value between 1 to 100 value: " + Math.floor(random))

// task 7

// var wegith = prompt("Enter you wegith in kgs")
// document.write("Your weigth in kg is: " + parseFloat(wegith) + " Kilogram" )


// task 8

// var secret = Math.random()*11
// var user = +prompt("Enter no between 1 to 10")
// if (Math.floor(secret) == user){

//     document.write("Congrats You guess the rigth number")
// }
// else{

//     document.write("Sorry your guess is wrong")
// }

// ====== chapter 31 to 34

//task 1 
var date = new Date()
// document.write(date);

//task 2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// alert("Current Month Is " +months[date.getMonth()]  )


//task 3

 var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// alert("Curent Day is " + weekday[date.getDay()])

//task 4

// if (weekday[date.getDay()] == "Sun" || weekday[date.getDay()] == "Sat"){
//     alert("It's fun day")
// }
// else{
//     alert("It's Not fun Day :(")
// }

// // task 5
// if (date.getDay() <= 15   ){
//     alert("It's First fifteen days of the month” if the date is less than 16th of the month un day")
// }
// else{
//     alert("Last days of the month")
// }

// task 6


// var milli = date.getTime()
// var min = milli/60

// document.write("<br>Current Date: " +date)
// document.write("<br>Current Date: " + milli)
// document.write("<br>Current Date: " + min)

// task 7

// var AM_PM = date.getHours()

// if( AM_PM <= 11){
//     alert("It's AM")
// }
// else{
//     alert("Its's PM")
// }

// task 8

// var last_date = new Date(2020, 12, 0)

// alert(last_date)

//task 9

// var ramdan = new Date(2020, 3, 18,0)
// var today = new Date().getTime(ramdan)
// var days_later =   ramdan-today
// alert( days_later + " Days has been passed since ramdan") 

//task 10