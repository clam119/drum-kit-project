var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();


    });
}