//initializing variables = Storing it in memory
let step1 = 'Go to the fridge';
let step2 = 'Open the fridge';
let step3 = 'Grab the peanutbuttor and the jelly';
let step4 = 'Close the fridge';
let step5 = "Take one piece of bread out of the bag.";
let step6 = "Use a spoon to get some peanut butter.";
let step7 = "Use the same spoon and get jelly, spread.";
let step8 = "Put another piece of bread on top";

performStep(step1);
performStep(step2);
performStep(step3);
performStep(step4);
performStep(step5);
performStep(step6);
performStep(step7);
performStep(step8);

function performStep(stepDescription) {
    console.log('Performing step: ' + stepDescription)
}