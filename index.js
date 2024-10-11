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
        showCharacter(character);
        character.drinkEmAll();
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

const showCharacter = (character) => {

    console.log(`${character.fullName}`);
    console.log(`-------------------------`);
    console.log(`Health:     ${character.health}`);
    console.log(`Magick:    ${character.magick}`);
    console.log(`Stamina:      ${character.stamina}`);
    
    character.potions.potions.map((potion, i = 0) => {

        console.log(`potion ${i}: ${potion.name}`);
    })
    
    console.log();
}

execute();