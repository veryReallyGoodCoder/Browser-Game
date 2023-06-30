const pCar = new Image();
const car1 = new Image();
const car2 = new Image();
const car3 = new Image();
const popo = new Image();

const radioSound = new Audio("../Media/radioSound.mp3");

let xIn = 0;
let yIn = 0;

let radioPlaying = false;

var spawnLineTop = 400;
var spawnLineBott = 400;

setInterval(init, 1000/25);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function init(){
    pCar.src = "../Media/main.png";
    car1.src = "Media/car1.png";
    car2.src = "Media/car2.png";
    car3.src = "Media/car3.png";
    popo.src = "Media/policeCar.png";

    ctx.drawImage(cars[c], 360, 350, 80, 140);
    window.requestAnimationFrame(init);


    window.requestAnimationFrame(draw);
}

const cars = [pCar, car1, car2, car3, popo];
let c = Math.floor((Math.random() * 5) + 0);

function draw(){
    
    let currCar = cars[c];

    ctx.clearRect(0,0,canvas.width, canvas.height);

    //ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(currCar, 360, 350, 80, 140);
    ctx.translate(xIn,0);

    // function loadRandCar(){
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     let newCar = cars[c];
    //     currCar = newCar;
        

    //     //ctx.drawImage(cars[c], 360, 350, 80, 140);
    //     console.log("random car drawn");
    // }

    addEventListener("keyup", function(e){
        if(e.code == 'Enter'){
            loadRandCar();
        }
    })

}
//ctx.fillStyle = "white";
//ctx.fillRect(395, 0, 10, canvas.height);


//movement
addEventListener("keydown", function(e){
    console.log(e.code);
    if(e.code == 'KeyA'){
        xIn = -0.5;
    }

    if(e.code == 'KeyD'){
        xIn = 0.5;
    }
 
})

addEventListener("keyup", function(e){
    if(e.code == 'KeyA'){
        xIn = 0;
    }

    if(e.code == 'KeyD'){
        xIn = 0;
    }

    if(e.code == 'KeyR'){
        //playRadio();
        radioPlaying = !radioPlaying;
        if(radioPlaying == true){
            playRadio();
        }
        else if(radioPlaying == false){
            pauseRadio();
        }
    }

    /*if(e.code == 'Enter'){
        loadRandCar();
    }*/
})

function playRadio(){
    radioSound.play();
    console.log("playing radio");
}
function pauseRadio(){
    radioSound.pause();
    console.log("radio paused");
}