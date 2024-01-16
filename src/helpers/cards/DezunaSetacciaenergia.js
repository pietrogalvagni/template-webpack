import Card from "./Card.js";

export default class DezunaSetacciaenergia extends Card {
    constructor(scene) {
        super(scene);
        this.name = "dezunaSetacciaenergia";
        this.playerCardSprite = "dezunaSetacciaenergia";
        this.opponentCardSprite = "cardBack";
    }
}