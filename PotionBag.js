export default class PotionBag{

    constructor (potions){

        this.potions = potions;
    }

    static create(data, cauldron){

        const potions = [];

        data.ingredients.map((ingredient) => {
                
            data.ingredients.map((otherIngredient) => {
                
                potions.push(cauldron.createPotion(ingredient.name, otherIngredient.name));
            })
        })

        return new PotionBag(potions);
    }
}