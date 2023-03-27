import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(protected playerA: Fighter, protected monster: SimpleFighter[]) {
    super(playerA);
  }

  fight(): number {
    this.monster.forEach((e) => {
      while
      (this.playerA.lifePoints !== -1 && e.lifePoints !== -1) {
        this.playerA.attack(e);
        e.attack(this.playerA);
      }
    });
    return this.playerA.lifePoints === -1 ? -1 : 1;
  }
}
