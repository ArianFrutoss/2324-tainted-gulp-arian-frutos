import Cauldron from "./cauldron.js";
import Character from "./Character.js";
import Ingredients from "./ingredients.js";
import PotionBag from "./PotionBag.js";
import { getIngredientsData, getPlayerData } from "./service.js"

const execute = async () => {

    try{

        //Receive data
        const ingredientData = await getIngredientsData();
        const playerData     = await getPlayerData();

        //Create the ingredients
        const ingredients = Ingredients.load(ingredientData);

        //Create the cauldron
        const cauldron = new Cauldron(ingredients);

        //Create the PotionBag
        const potionBag = PotionBag.create(playerData.players[0].pouch_red, cauldron);
        showPotions(potionBag);

        //Create the Character
        const character = Character.from(playerData.players[0], potionBag);
    }

    catch (error){

        console.log(error.message);
    }
}

const showIngredients = (ingredients) => {
    
    ingredients.ingredients.map((ingredient) => {

        console.log(ingredient);
        console.log(`-------------------------`);
        console.log();
    })
}

const showPotion = (potion) => {

    console.log(`${potion.name}`);
    console.log(`Value:     ${potion.value}`);
    console.log(`Weight:    ${potion.weight}`);
    console.log(`Time:      ${potion.time}`);
    console.log(`-------------------------`);
    console.log();
}

const showPotions = (potionBag) => {

    potionBag.potions.map((potion) => {

        console.log(`${potion.name}`);
        console.log(`Value:     ${potion.value}`);
        console.log(`Weight:    ${potion.weight.toFixed(1)}`);
        console.log(`Time:      ${potion.time}`);
        console.log(`-------------------------`);
        console.log();
    })
}

execute();