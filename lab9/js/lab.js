/* Authors: Sonia Ellis & Joey Balaoing
 * Created: 11/1/21
 * License: Public Domain
*/

  // Use getElementById() to find your output <div> and assign it to a variable outputEl
   var outputEl = document.getElementById("output");
   console.log("outputEl: ", outputEl);

   // Create a new element with document.createElement("p") and assign it to a variable new1El
   var new1El = document.createElement("p");

   // Change the html attribute of new1El
   new1El.innerHTML = "You changed bro.";
   new1El.id = "new-one";

   // Create another new element and assign it to a variable new2El
   var new2El = document.createElement("p");
   new1El.id = "new-two";

   // Change the html attribute of new2El
   new2El.innerHTML = "Nah brah, you changed.";

   // Append both new elements
   outputEl.appendChild(new1El);
   outputEl.appendChild(new2El);

   // css changes
   new1El.style.fontSize = "25px";
   new2El.style.color = "gold";
   outputEl.style.border = "dashed 5px pink";
