export default class Character{

    constructor (fullName, health, magick, stamina, potions){

        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(player, potions){

        const fullname = `${player.name} the ${player.class}`;
        const health = player.health;
        const magick = player.magick;
        const stamina = player.stamina;
        
        return new Character(
            fullname,
            health,
            magick,
            stamina,
            potions
        )
    }

    drinkEmAll(){
        
        for (let i = 0; i < this.potions.potions.length; i++){

            const potion = this.potions.potions[i];
            const potionWords = potion.name.split(' ');
            let text = '';

            switch (potionWords[potionWords.length - 1]){

                case 'Health':
                    potionWords[0] === 'Potion' ?
                    (this.health += potion.value,
                    text = `drinks ${potion.name} and gains ${potion.value} points of health`) :
                    (this.health -= potion.value,
                    text = `drinks ${potion.name} and loses ${potion.value} points of health`);
                    break;

                case 'Magicka':
                    potionWords[0] === 'Potion' ?
                    (this.magick += potion.value,
                    text = `drinks ${potion.name} and gains ${potion.value} points of magick`) :
                    (this.magick -= potion.value,
                    text = `drinks ${potion.name} and loses ${potion.value} points of magick`);
                    break;

                case 'Stamina':
                    potionWords[0] === 'Potion' ?
                    (this.stamina += potion.value,
                    text = `drinks ${potion.name} and gains ${potion.value} points of stamina`) :
                    (this.stamina -= potion.value,
                    text = `drinks ${potion.name} and loses ${potion.value} points of stamina`);
                    break;

                default:

                    if (potion.name === 'Potion of Sanity'){

                        this.health += potion.value;
                        this.magick += potion.value;
                        this.stamina += potion.value;
                        text = `has found ${potion.name} and gains ${potion.value} points of health, magick & stamina`;
                    }

                    else if (potion.name != 'Failed Potion'){

                        potionWords[0] === 'Potion' ?
                        (this.health++, this.magick++, this.stamina++,
                        text = `drinks ${potion.name} and gains 1 point of health, magick & stamina`) :
                        (this.health--, this.magick--, this.stamina--,
                        text = `drinks ${potion.name} and loses 1 point of health, magick & stamina`);
                    }

                    else {

                        text = `cannot drink the ${potion.name}`;
                    }
                    break;
            }

            this.showCharacter(text);

            if (potion.name === 'Potion of Sanity'){

                return "Joseph Calamitae the Former archmage has found the Potion of Sanity. His mind is healed. Well done!!";
            }

            else if (this.health <= 0){

                return "Joseph is dead";
            }

            else if (this.magick <= 0){

                return "Joseph has been drained of all his magic and Scholar X.G's chaos spell finishes him off.";
            }

            else if (this.stamina <= 0){

                return "Joseph is completely exhausted and can't move anymore.";
            }
        }
    }

    showCharacter = (text) => {

        console.log(`${this.fullName} ${text}`);
        console.log(`Health:     ${this.health}`);
        console.log(`Magick:    ${this.magick}`);
        console.log(`Stamina:      ${this.stamina}`);
        console.log(`-------------------------`);
        console.log();
    }
}