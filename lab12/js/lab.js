/*
 * Authors: Sonia Ellis & Joey Balaoing
 * Created: 19 September
 * License: Public Domain
 */

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod === 0) {
        return "Gryffindor";
    }
    else if (mod === 1) {
        return "Hufflepuff";
    }
    else if (mod === 2) {
        return "Slytherin";
    }
    else if (mod === 3) {
        return "Ravenclaw";
    }
}


function getNameAndSort() {
    // var userName = prompt("Name? ");
    var userName = $("#input-field").val()
    var house = sortingHat(userName);
    var str = "Your house is " + house;
    console.log(str);
    $("#output").html(str);
}

$("#my-button").click(getNameAndSort);
