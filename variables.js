// Adding a comment to the code

// Creating variables (storing information in the memory of the pc)
//Size color type of shoe, adress
//String: Uses to represent text
let shoeName = "Nike Aire Max";
let color = "black";

let shoePrice = 150.5; // Number
let available = 5;
let isAvailavble = true; //Boolean (true / false)

// Create 5 variables (firstname, lastname, emailaders,age, hasAPartner = true/false)
let firstname = "Remsey";
let lastname = "Mailjard";
let emailadres = "remsey@skills4-it.nl";
let age = 35;
// Note: April is the 4th month, but it's represented as 3 in JavaScript (0 = January, 3 = April)

//Display information
console.log("My name is: " + firstname);
console.log("My name is: " + firstname + " " + lastname);
//console.log(birthdate.toLocaleDateString());

let birthdate = new Date(1989, 1, 6);

// Options to specify the format as long
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// Display the birthdate in a long, readable format
let formattedDate = birthdate.toLocaleDateString("en-US", options);
console.log("My birthdate (Long Format): " + formattedDate);

function getZodiacSign(date) {
  let month = date.getMonth() + 1; // JavaScript's getMonth() returns 0-11, so add 1 to align with calendar months
  let day = date.getDate();

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Aquarius";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "Pisces";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Aries";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Taurus";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Gemini";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Cancer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Leo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Virgo";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Libra";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Scorpio";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Sagittarius";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "Capricorn";
  }
}

// Example usage:
let birthdate2 = new Date(1989, 1, 6); // Note: Month is 0-indexed, 1 is February

function showZodiacSign() {
  let birthdate2 = new Date(document.getElementById("birthdate").value); // Note: Month is 0-indexed, 1 is February
  let day = birthdate2.getDate();
  let month = birthdate2.getMonth() + 1; // JavaScript's getMonth() returns 0-11, so add 1 to align with calendar months
  alert("Zodiac Sign: " + getZodiacSign(birthdate2));

  // Writing it on my screen
  document.getElementById("zodiacSign").innerHTML =
    "Your zodiac sign is: " + getZodiacSign(birthdate2);
}
