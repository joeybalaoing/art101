/*
 * Authors: Sonia Ellis & Joey Balaoing
 * Created: 19 September
 * License: Public Domain
 */

 // sortUserName - a function that takes user unput and sorts the letters of their name
 function sortUserName() {
   var userName = window.prompt("Hi. Please tell my your name so I can fix it.");
   console.log("userName =", userName);

   // split string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);

   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);

   // joey array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;

   // could do the above code as a single line:
   // userNane.toLower().split("").sort().join("")
 }

 // Output
 document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");
