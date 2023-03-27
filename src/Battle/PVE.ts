import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(protected player: Fighter, protected monster: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    this.monster.forEach((e) => {
      while
      (this.player.lifePoints !== -1 && e.lifePoints !== -1) {
        this.player.attack(e);
        e.attack(this.player);
      }
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
