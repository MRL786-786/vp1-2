var ball;
var database;
var position;
var gameState = 0;
var playerCount
var form, game, player;
var allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
    createCanvas(displayWidth-50,displayHeight-75);
database = firebase.database();


game = new Game()
game.getState()
game.start()
}
 






function draw(){
    background("white");
    if (playerCount=== 4){
        game.update(1);
    }

    if(gameState===1){
        clear()
        game.play()
    }
}
