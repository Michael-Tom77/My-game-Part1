class Game{

    constructor(){

    }

    getGameState(){
        database.ref("gameState").on("value", (data)=>{
            var state = data.val();
        })
    }

    updateGameState(state){
        database.ref("/").update({
            gameState: state
        })
    }

}