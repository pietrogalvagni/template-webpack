import CardHandler from "../helpers/CardHandler"
import DeckHandler from "../helpers/DeckHandler"
import GameHandler from "../helpers/GameHandler"
import SocketHandler from "../helpers/SocketHandler"
import InteractiveHandler from "../helpers/InteractiveHandler"
import UIHandler from "../helpers/UIHandler";

export default class Game extends Phaser.Scene {
    constructor(){
        super({
            key: 'Game'
        })
    }

    preload(){

        this.load.image('kogaSegugioFidato', 'assets/Koga_Segugio_Fidato.png');
        this.load.image('dezunaSetacciaenergia', 'assets/Dezuna_Setacciaenergia.png');
        this.load.image('cardBack', 'assets/cardBack.png');
    }

    create(){
        this.CardHandler = new CardHandler();
        this.DeckHandler = new DeckHandler(this);
        this.GameHandler = new GameHandler(this);
        this.SocketHandler = new SocketHandler(this);
        this.UIHandler = new UIHandler(this);
        this.UIHandler.buildUI();
        this.InteractiveHandler = new InteractiveHandler(this);


    }

    update(){

    }
}