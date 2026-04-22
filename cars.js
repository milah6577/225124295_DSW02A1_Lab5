document.addEventListener("click", function(){
let carMake = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota" ];

let cars = [
    {
        carMake:"VW",
        type:" Käfer Baujahr",
        img:"images/VW_Käfer_Baujahr_1966.jpg"
    },
     {
        carMake:"BMW",
        type:"E318series ",
        img:"images/BMWE318series.jpg"
    },
     {
        carMake: "Benz",
        type:" classic",
        img: "images/classic.jpg"
    },
     {
        carMake:"Audi",
        type:"sport quattro 1984 goodwood ",
        img:"images/best-quattro-audis-1-audi-sport-quattro-1984-goodwood-08062020.jpg"
    },
     {
        carMake:"Ford",
        type:"1928 Model A ",
        img:"images/1928_Model_A_Ford-1024x848.jpg"
    },
     {
        carMake:"Toyota",
        type:" classic ",
        img: "images/dsc03311-2-jpg-1622955042.jpg"
    }
    
];

let makeList = document.getElementById("make-list");
let CarName = document.getElementById("car-name");
let CarType = document.getElementById("car-type");
let CarImage = document.getElementById("car-img");
let GuessBtn = document.getElementById("guess-btn");

let currentCar = null;
let count = 0;
let total = 0;

carMake.forEach(function(Cmake, index){

    let Options = document.createElement("Options");
    Options.value = String(index);
    Options.textContent = Cmake;
    makeList.appendChild(Options);

});

function RandomCars(){
    return cars[Math.floor(Math.random() * cars.length)];
};

function showCars(){
    currentCar = RandomCars();
    CarName.textContent = currentCar.name;
    CarType.textContent = currentCar.type;
    CarImage.src = currentCar.img;

    CarImage.classList.remove("hidden")
    GuessBtn.classList.remove("disabled")
};

GuessBtn.onclick = function(){

    GuessBtn.classList.add("disabled")
    
    let choosenMake = makeList.Options[makeList.selectedIndex].textContent;
    if(choosenMake === currentCar.Cmake){
        count++;
        countSpan.textContent = count;
    }

    total++;
    totalSpan.textContent = total;

    showCars;
}
showCars();

});