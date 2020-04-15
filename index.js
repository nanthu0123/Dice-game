function DiceGame(){

    // generate the random number between 1 to 6 for dice1 
var randomNumber1=(Math.random()*6)+1;
randomNumber1=Math.floor(randomNumber1)



// generate the random number between 1 to 6 for dice1 
var randomNumber2=(Math.random()*6)+1;
randomNumber2=Math.floor(randomNumber2)


// concatenate random number with dice image
var randomImage1='dice'+randomNumber1+'.png'
var randomImageSource1='images/'+randomImage1
var randomImage2='dice'+randomNumber2+'.png'
var randomImageSource2='images/'+randomImage2

// change the source attribute of img1 and img2 classes with randomImageSource variable 
document.querySelector(".img1").setAttribute("src",randomImageSource1)
document.querySelector(".img2").setAttribute("src",randomImageSource2)

//if player1 have more value, change the h1 text as player1 wins
if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML=('player 1 wins')
}
//if player2 have more value, change the h1 text as player2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML=('player 2 wins')
}
//if both players have same value, change the h1 text as draw
else if(randomNumber1===randomNumber2){
    document.querySelector('h1').innerHTML=('draw')
}
}
// set the dice number 1 to both dice initially
document.querySelector(".img1").setAttribute("src","images/dice1.png")
document.querySelector(".img2").setAttribute("src","images/dice1.png")
document.querySelector('h1').innerHTML=('Roll Me')
// when the user click the button, the function gets call and dice starts to roll
document.querySelector(".btn").addEventListener("click",DiceGame)


