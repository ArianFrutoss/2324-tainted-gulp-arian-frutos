export default class PotionBag{

    constructor (potions){

        this.potions = potions;
    }

    static create(data, cauldron){

        const potions = [];
        const player = data.players[0];

        for (let i = 0; i < player.pouch_red.length; i++){

            for (let j = i; j < player.pouch_red.length; j++){
                
                potions.push(cauldron.createPotion(player.pouch_red[i], player.pouch_red[j]));
            }
        }

        return new PotionBag(potions);
    }
}