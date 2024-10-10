export default class Character{

    constructor (fullName, health, magick, stamina, potions){

        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions){

        
    }
}