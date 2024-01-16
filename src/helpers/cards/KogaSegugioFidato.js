import Card from "./Card.js";

export default class KogaSegugioFidato extends Card {
    constructor(scene) {
        super(scene);
        this.name = "kogaSegugioFidato";
        this.playerCardSprite = "kogaSegugioFidato";
        this.opponentCardSprite = "cardBack";
    }
}