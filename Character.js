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
        
        this.potions.potions.map((potion) => {

            const potionWords = potion.name.split(' ');
            
            switch (potionWords[potionWords.length - 1]){

                case 'Health':
                    potionWords[0] === 'Potion' ?
                    this.health += potion.value :
                    this.health -= potion.value;
                    break;

                case 'Magicka':
                    potionWords[0] === 'Potion' ?
                    this.magick += potion.value :
                    this.magick -= potion.value;
                    break;

                case 'Stamina':
                    potionWords[0] === 'Potion' ?
                    this.stamina += potion.value :
                    this.stamina -= potion.value;
                    break;

                default:

                    if (potion.name === 'Potion of Sanity'){

                        this.stamina += potion.value;
                        this.health += potion.value;
                        this.stamina += potion.value;
                    }

                    else if (potion.name != 'Failed Potion'){

                        potionWords[0] === 'Potion' ?
                        (this.stamina++, this.health++, this.stamina++) :
                        (this.stamina--, this.health--, this.stamina--);
                    }
                    break;
            }
        })
    }
}

