// Iteration 1: Names and Input

const hacker1 = "Eric";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Josh";

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newHacker1 = "";
let newHacker2 = "";

for (let driverIndex = 0; driverIndex <= hacker1.length - 1; driverIndex += 1) {
  
  newHacker1 += (hacker1[driverIndex]);
  newHacker1 += " ";
  newHacker1 = newHacker1.toUpperCase();
}

for(let navigatorIndex = 3; navigatorIndex >= 0; navigatorIndex -= 1) {
  newHacker2 += hacker2[navigatorIndex];
}
console.log(newHacker1);
console.log(newHacker2);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}



//BONUS 1


const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius, mi non pretium rhoncus, neque lacus pretium nibh, ac commodo turpis leo eget arcu. Nam vulputate luctus nisl a pharetra. In ac nibh ultricies, pellentesque leo ut, euismod magna. Integer imperdiet facilisis urna, eu placerat arcu maximus sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean egestas hendrerit diam mattis faucibus. Maecenas eu sollicitudin odio, ac tempor tellus. Pellentesque a eros vehicula, lacinia turpis eu, sollicitudin tellus. Fusce et venenatis eros. Duis vel nibh sed diam scelerisque gravida sed nec augue.

Phasellus sit amet tincidunt metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in eros risus. Nullam imperdiet ligula pellentesque lacus euismod, at fermentum purus auctor. Duis nec viverra odio. Praesent dolor mi, fringilla ac cursus nec, condimentum quis odio. Aenean imperdiet auctor massa, vitae dignissim enim sagittis id. Donec posuere nunc at tellus semper, eu sollicitudin dui mollis. Praesent congue neque id lacus blandit sollicitudin. Suspendisse tempor, nulla quis auctor accumsan, metus risus pulvinar dolor, ut mattis turpis velit vitae erat. Suspendisse eget sagittis tortor. Nullam ornare libero a justo tempus, vitae ornare turpis finibus.

Phasellus elementum leo mi, non molestie libero blandit id. Quisque non scelerisque odio. Nunc luctus venenatis felis eget commodo. Morbi nisi arcu, varius eu dui sed, rutrum mattis purus. Vestibulum euismod pellentesque ligula, in volutpat magna pretium ut. Quisque volutpat, odio eu porta aliquet, nibh erat malesuada mauris, vel consectetur augue neque nec erat. Suspendisse in varius massa. Donec mi purus, scelerisque a justo sit amet, varius congue justo.`;

const longTextWords = longText.split(" ");

console.log(`There are ${longTextWords.length} words in the string is `);

let etCounter = 0;
for (let longTextWordsIndex = 0; longTextWordsIndex <= longTextWords.length -1; longTextWordsIndex += 1) {
  
  if (longTextWords[longTextWordsIndex] === "et") {
    etCounter += 1;
  }
}

console.log(`The word "et" appears ${etCounter} times in the string`);


//BONUS 2

//as they ask you to compare de value of the string i take in count the uppercase and the simbols in order to be a perfect palindrome


const phraseToCheck = "step on no pets";

let reversePhrase = "";

for (let reverseCheck = phraseToCheck.length -1; reverseCheck >= 0; reverseCheck -= 1) {
  reversePhrase += phraseToCheck[reverseCheck];
}

//console.log(reversePhrase);

if (phraseToCheck === reversePhrase) {
  console.log(`It's a palindrome!`);
}
else {
  console.log(`Is not a palindrome, try again.`)
}



// LET'S TRY BONUS 2 WITH A FUNCTION


const phrase1 = "A man, a plan, a canal, Panama!";
const phrase2 = "Amor, Roma";
const phrase3 = "race car";
const phrase4 = "stack cats";
const phrase5 = "step on no pets";
const phrase6 = "taco cat";
const phrase7 = "put it up";
const phrase8 = "Was it a car or a cat I saw?\" and \"No 'x' in Nixon";

function palindromeCheck (ToCheck) {
  let reversePhrase = "";
 for (let reverseCheck = ToCheck.length -1; reverseCheck >= 0; reverseCheck -= 1) {
  reversePhrase += ToCheck[reverseCheck];
}


if (ToCheck === reversePhrase) {
  return console.log(`It's a palindrome!`);
}
else {
  return console.log(`Is not a palindrome, try again.`)
}
  
}
palindromeCheck(phrase1);
palindromeCheck(phrase2);
palindromeCheck(phrase3);
palindromeCheck(phrase4);
palindromeCheck(phrase5);
palindromeCheck(phrase6);
palindromeCheck(phrase7);
palindromeCheck(phrase8);
