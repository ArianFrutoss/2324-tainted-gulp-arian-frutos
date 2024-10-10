import Cauldron from "./cauldron.js";
import Ingredients from "./ingredients.js";
import { getData } from "./service.js"

const execute = async () => {

    try{

        //Receive the ingredients data
        const data = await getData();

        //Create the ingrdients
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients);

        //Create the cauldron
        const cauldron = new Cauldron(ingredients);

        //Create the potions
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);
        
        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);
        
        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);
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

execute();