class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if (gameState === 0){
            player=new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1=createSprite(100,200,50,50);
    car2=createSprite(300,200,50,50);
    car3=createSprite(500,200,50,50);
    car4=createSprite(700,200,50,50);
    cars=[car1,car2,car3,car4]

    }

play(){
    
    form.hide()
   // textSize(40)
   // text("gameStart",150,100)
   var pos=0;
   var x=100;
   var y;
    Player.getPlayerInfo()
    var displayPosition = 130
    for(var plr in allPlayers){
       x=x+200
       y=displayHeight-allPlayers[plr].distance
       cars[pos].x=x
       cars[pos].y=y
       pos=pos+1
       if(pos===player.index){
           cars[pos-1].shapeColor= "red"
           camera.position.x=displayWidth/2
           camera.position.y=cars[pos-1].y
       }
        //textSize(30)
        //text(allPlayers[plr].name + ":"+ allPlayers[plr].distance, 200,displayPosition)
        if(keyIsDown(UP_ARROW)){
        player.distance+=10
        player.update()

}
    }
    drawSprites()
}



}