var randomNumber, wins, loses, crystalRandomNum;
var score = 0;
var images = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png"];

var randomNumbers = [0, 0, 0, 0];
randomNumber = generateTheNumber();

document.getElementById('number').textContent = randomNumber;



for(var i = 0; i < randomNumbers.length; i++){
    var randomNum = generateCrystalValue();

    var crystal = $("<button>");

    crystal.attr({
        "class": 'crystal' + i,
        "data-random": randomNum
    });
    $(".crystals").append(crystal);
    $(".crystal" + i).html("<img src=" + images[i] + " width='100px'>");
}

for(var i = 0; i < randomNumbers.length; i++) {
    $(".crystal" + i).on("click", function(){

        score += parseInt($(this).attr("data-random"));
        document.getElementById('total').textContent = score;
        //console.log(score);
    });
}

function generateTheNumber() {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
function generateCrystalValue(){
    return  Math.floor(Math.random() * 12) + 1; 
}

function resetGame(){
    randomNumber = randomTheNumber();

    for(var i = 0; i < randomNumbers.length; i++){
        // var randomNum = generateCrystalValue();
        $(".crystal" + i).attr("data-random") = generateCrystalValue();
    }

}











// var btnDOM = document.querySelectorAll('button');
// console.log(randomNumbers[0]);
// for(var i = 0; i < btnDOM.length; i++){
//     btnDOM[i].addEventListener("click", function(event){
        
//         var theNum = randomNumbers[i];
//         alert("Number: " + theNum);
//     });
// }

