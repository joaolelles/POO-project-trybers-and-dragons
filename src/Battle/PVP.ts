import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected playerA: Fighter, protected playerB: Fighter) {
    super(playerA);
  }

  fight(): number {
    while
    (this.playerA.lifePoints !== (-1) && this.playerB.lifePoints !== (-1)) {
      this.playerA.attack(this.playerB);
      this.playerB.attack(this.playerA);
    }
    return this.playerA.lifePoints === -1 ? -1 : 1;
  }
}
