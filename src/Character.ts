import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = (this.race.maxLifePoints / 2);
    this._lifePoints = (this.race.maxLifePoints);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: (this._archetype.energyType), 
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } 
    this._lifePoints -= 1;
    if (this._lifePoints - damage <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.maxLifePoints = getRandomInt(1, 10) + this.maxLifePoints;
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this._strength = getRandomInt(1, 10) + this._strength;
    this._dexterity = getRandomInt(1, 10) + this._dexterity;
    this._defense = getRandomInt(1, 10) + this._defense;
    this._energy.amount = 10;
    this._lifePoints = getRandomInt(1, 10) + this._lifePoints;
    if (this._lifePoints > this.race.maxLifePoints) {
      this._lifePoints = this.race.maxLifePoints;
    }
  }

  special(): void {
    this._strength += getRandomInt(1, 5) + this._strength;
    this._defense += getRandomInt(1, 3) + this._defense;
  }
}