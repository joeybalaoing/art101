/*
 * Authors: Sonia Ellis & Joey Balaoing
 * Created: 19 September
 * License: Public Domain
 */

//  sortUserName - a function that takes user unput and sorts the letters of their name
//  function sortUserName() {
//
//    var userName;
//    console.log("userName =", userName);
//    // split string to array
//    var nameArray = userName.split('');
//    console.log("nameArray =", nameArray);
//
//    // sort the array
//    var nameArraySort = nameArray.sort();
//    console.log("nameArraySort =", nameArraySort);
//
//    // joey array back to a string
//    var nameSorted = nameArraySort.join('');
//    console.log("nameSorted =", nameSorted);
//
//    return nameSorted;
//  }
//
//
// function putNameInTitle(sortUserName) {
//   // When the button is pushed,
//   // prompt the user to input their name
//   // with the prompt() function.
//   //var name = prompt("Please enter your name:");
//   var field = document.getElementById("myfield");
//   var name = field.value;
//
//   // Use this input to change the text from
//   // ‘Hello, World!’ to ‘Hello’ + the user’s name
//   var headingEl = document.getElementById("title");
//   headingEl.innerHTML = "Hello, " + name;
// }
//
// // Create an event handler within the JS file that listens for a button click.
// var buttonEl = document.getElementById("mybutton");
// buttonEl.addEventListener("click", putNameInTitle);
//
//
//
// FTE (find the element)
// buttonEl = document.getElementById("my-button");
// console.log("button element:", buttonEl);
//
// inputEl = document.getElementById("user-name");
// console.log("input element:", inputEl);
//
// outputEl = document.getElementById("output");
// console.log("output element:", outputEl);
//
// // event listener
// buttonEl.addEventListener("click", function(){
//   var userName = inputEl.value;
//   var newName = sortUserName();
//
//   outputEl.innerHTML = "<p id=output>" + newName + "</p";
// });
//
//  document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");


function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add an event listener to button
buttonEl.addEventListener("click", function(){
  // get value from name element
  var userName = inputEl.value;
  // modify value - either sort or shuffle
  var newName = toTitleCase(reorderUserName(userName));
  // put value in output element
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
