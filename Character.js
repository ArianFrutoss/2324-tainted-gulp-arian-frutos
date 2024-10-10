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
}