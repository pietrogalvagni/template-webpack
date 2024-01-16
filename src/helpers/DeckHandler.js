import CardBack from "./cards/Back";
import DezunaSetacciaenergia from "./cards/DezunaSetacciaenergia";
import KogaSegugioFidato from "./cards/KogaSegugioFidato";

export default class DeckHandler {
    constructor(scene){
        this.dealCard = (x,y,name,type)=>{
            let cards = {
                cardBack: new CardBack(scene),
                dezunaSetacciaenergia: new DezunaSetacciaenergia(scene),
                kogaSegugioFidato: new KogaSegugioFidato(scene),
            }
            let newCard = cards[name];
            return (newCard.render(x,y,type));
        }

    }
}