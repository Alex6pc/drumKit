const numberOfDrumButtons = document.querySelectorAll(".drum");

// Detecting Button Press
for(let i = 0; i < numberOfDrumButtons.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHtml = this.innerHTML;
         makeSound(buttonInnerHtml)
         buttonAnimation(buttonInnerHTML);
        });
    }
    document.addEventListener("keypress", function(e){
        makeSound(e.key);
        buttonAnimation(e.key);
    });

// ------------------------
// Detecting Keyboard Press
    function makeSound(key){
        switch (key) {
            case "1":
                let sound1 = new Audio('sounds/tom-1.mp3');
                sound1.play();
                break;
            case "2":
                let sound2 = new Audio('sounds/tom-2.mp3');
                sound2.play();
                break;
            case "3":
                let sound3 = new Audio('sounds/tom-3.mp3');
                sound3.play();
                break;
            case "4":
                let sound4 = new Audio('sounds/tom-4.mp3');
                sound4.play();
                break;
            case "5":
                let sound5 = new Audio('sounds/snare.mp3');
                sound5.play();
                break;
            case "6":
                let sound6 = new Audio('sounds/crash.mp3');
                sound6.play();
                break;
            case "7":
                let sound7 = new Audio('sounds/kick-bass.mp3');
                sound7.play();
                break;    

            default: console.log(key);
        }
    }
    function buttonAnimation(currentKey) {

        let activeButton = document.querySelector(".b" + currentKey);
      
        activeButton.classList.add("pressed");
      
        setTimeout(function() {
          activeButton.classList.remove("pressed");
        }, 100);
      
    }