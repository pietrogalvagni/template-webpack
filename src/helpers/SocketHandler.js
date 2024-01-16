import io from "socket.io-client"
import GameHandler from "./GameHandler";

export default class SocketHandler {
    constructor(scene){
        scene.socket = io("http://localhost:3000");

        scene.socket.on("connect", ()=>{
            console.log("connected!!!!!");
            scene.socket.emit("dealDeck", scene.socket.id);
        });

        scene.socket.on("changeGameState", (gameState)=>{
            scene.GameHandler.changeGameState(gameState);
            console.log("changeGameState invoked.");
        });
     
        scene.socket.on("setFistPlayer", (playerId)=>{
            scene.GameHandler.setFistPlayer(playerId === scene.socket.id);
            console.log("setFistPlayer invoked.");
        });

        scene.socket.on("dealCards", (socketId, cards)=>{
            console.log("SocketHandler: dealCards to " + socketId);
            if (socketId === scene.socket.id) {
                for (let i = 0; i< cards.length; i++) {
                    let card = scene.GameHandler.playerHand.push(scene.DeckHandler.dealCard(155 + (i * 155), 860, cards[i], "playerCard"));
                }
            } else {
                for (let i in cards) {
                    let card = scene.GameHandler.opponentHand.push(scene.DeckHandler.dealCard(155 + (i * 155), 135, "cardBack", "opponentCard"));
                }
            }
        });

        scene.socket.on("passTurn", (socketId, cards)=>{
            console.log("passTurn invoked.");
            scene.GameHandler.changeTurn();
        });

        scene.socket.on("cardPlayed", (cardName, socketId)=>{
            if (socketId != scene.socket.id){
                scene.GameHandler.opponentHand.shift().destroy();
                scene.DeckHandler.dealCard(scene.dropZone.x - 350 + (scene.dropZone.data.values.cards * 50), scene.dropZone.y, cardName, "opponentCard");
                scene.dropZone.data.values.cards++;
            }
        });
    }
}