export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

class Warrior extends Personagem {
  protected emoji = `\u{1F9DD}`;
  bordao(): void {
    console.log(this.emoji + ' Guerreira ao Ataque');
  }
}
class Monster extends Personagem {
  protected emoji = `\u{1F9DF}`;
  bordao(): void {
    console.log(this.emoji + ' monstro ao ataque');
  }
}

const warrior = new Warrior('Guerreira', 100, 1000);
const monster = new Monster('Monstro', 87, 1000);

warrior.atacar(monster);
warrior.atacar(monster);
warrior.atacar(monster);
monster.atacar(warrior);
monster.atacar(warrior);
monster.atacar(warrior);
