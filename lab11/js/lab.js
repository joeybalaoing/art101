// Authors: Sonia Ellis & Joey Balaoing
// Created: 11/8/21
// License: Public Domain

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$("#challenge").append("<button id='one'>button</button>");
$("#problem").append("<button id='two'>button</button>");
$("#results").append("<button id='three'>button</button>");

// Add to your previous JavaScript file:
// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button
$("#one").click(function(){
  // find the section, toggle a class
  // $("#challenge").toggleClass("special");
  $(this).parent().toggleClass("special");
})

$("#two").click(function(){
  $(this).parent().toggleClass("special");
})

$("#three").click(function(){
  $(this).parent().toggleClass("special");
})
