export default class PotionBag{

    constructor (potions){

        this.potions = potions;
    }

    static create(pouch, cauldron){

        const potions = [];

        for (let i = 0; i < pouch.length; i++){

            for (let j = i; j < pouch.length; j++){
                
                potions.push(cauldron.createPotion(pouch[i], pouch[j]));
            }
        }

        return new PotionBag(potions);
    }
}