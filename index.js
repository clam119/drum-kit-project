//Challenge - Add new code: addEventListener to every single button. 

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        alert("i got clicked!");
    });
}


