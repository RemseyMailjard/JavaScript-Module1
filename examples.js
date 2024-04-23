let favoriteMeal1 = "Pizza";
let favoriteMeal2 = "Sushi";
let favoriteMeal3 = "Filibertos";
let favoriteMeal21 = "";

//Create a list (Array)
let favoriteMeals = ["Pasta", "Sushi", "Filibertos"];
console.log(favoriteMeals[0]); //Pasta
console.log(favoriteMeals[2]); //Filibertos

console.log(
  `Hi, my name is Remsey and my 3 favorite meals are: ${favoriteMeal1}, ${favoriteMeal2}, ${favoriteMeal3}"`
);

// Use template literals to create a message, accessing each element individually by its index
console.log(`Hi, my name is Remsey and my 3 favorite meals are: "${favoriteMeals[0]}, ${favoriteMeals[1]}, ${favoriteMeals[2]}"`);




//Creating a jagged Array
let favoriteMealsByPerson = {
    "Remsey": ["Pasta", "Sushi", "Rice, Chicken with brown beans"], // Replace meal1, meal2, meal3 with actual meal names if known
    "Andrea Ceballos": ["Sushi", "Torta", "Tacos", "Steak"],
    "Jesus Mimila Hurtado": ["chilaquiles", "lamb curry", "pasta"],
    "Dante 'Donny' Angerame": ["Chicken Parm", "Sushi", "Poutine"],
    "Kaaliyah Gray": ["Bulgogi", "Kimchi", "Blackened Salmon Caesar", "Spicy Miso Ramen"],
    "Rene Banuelos": ["potatoes", "rice", "beans"],
    "Leslie Alvarado": ["Pizza", "KBBQ", "Mexican Sushi"],
    "Uriel Delgado": ["Burgers", "Tacos", "Sonora dogs"],
    "Kayla Hanifen": ["Grilled Artichoke", "Black Sea Bass", "Cincinnati Chili"],
    "Jaranesca Braker": ["Garlic Parmesan Wings with Homemade Ranch", "SouthWest Avocado Salad", "Turkey Burger with grill onions, mushrooms, and swiss cheese", "Truffle Fries"],
    "Alfi Ali": ["Biryani", "Shawarma", "Ful-medames"],
    "Moncerrat (Monce) Lua Salas": ["Mariscos", "KBBQ", "Steak"],
    "Daniel Solar": ["Tacos", "Pasta", "Brisket"]
};

//console.log(favoriteMealsByPerson);
// Retrieve and log Andrea Ceballos's favorite meals
console.log("Daniel Solar's favorite meals are: " + favoriteMealsByPerson["Daniel Solar"].join(", "));


let priceMeal1 = 20.30;
let priceMeal2 = 15;
let priceMeal3 = 10;
let total = priceMeal1 + priceMeal2 + priceMeal3;
console.log(`de total price of our 3 favorite meals is ${total}`);
let taxes = 0.08; // 8% procent

let totalincludingtaxes = total * 1.08;
// Calculate total price including taxes
let totalIncludingTaxes = total * (1 + taxes);

console.log(`The total price of our 3 favorite meals is $${total.toFixed(2)}`);
// Log the total price including taxes
console.log(`The total price of our 3 favorite meals including taxes is $${totalIncludingTaxes.toFixed(2)}`);


