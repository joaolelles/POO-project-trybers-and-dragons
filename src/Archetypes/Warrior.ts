import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static archetypeInstances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.archetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }
}