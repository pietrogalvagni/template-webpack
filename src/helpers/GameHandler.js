
// Place to write the "turn" logic
export default class GameHandler {
    constructor(scene){
        this.gameState = "Initializing";
        this.isMyTurn = false;
        this.playerDeck = [];
        this.opponentDeck = [];
        this.playerHand = [];
        this.opponentHand = [];
        this.discard = [];

        this.changeTurn =()=>{
            if (this.gameState === "Initializing"){
                return;
            }
            if (this.isMyTurn){
                scene.passTurn.disableInteractive();
                scene.passTurn.setColor("#ffffff");
            }
            else{
                scene.passTurn.setInteractive();
                scene.passTurn.setColor("#00ffff");
            }
            this.isMyTurn = !this.isMyTurn;
            console.log("GameHandler: isMyTurn: "  + this.isMyTurn);
            
        }
        
        this.changeGameState = (gameState) =>{
            this.gameState = gameState;
            console.log("GameHandler: GameState: " + this.gameState);
            if (this.gameState === "Initializing"){
                scene.DeckHandler.dealCard(1000, 850, "cardBack", "playerCard");
                scene.DeckHandler.dealCard(1000, 135, "cardBack", "opponentCard");
                scene.dealCards.setInteractive();
                scene.dealCards.setColor("#00ffff");
            }
            else if (this.gameState === "Ready"){
                this.changeTurn(); // start the game
            }
        }

        this.setFistPlayer = (myTurn)=>{
            this.isMyTurn = myTurn;
        }
    }
}