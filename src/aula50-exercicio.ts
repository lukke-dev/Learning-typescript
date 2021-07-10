type VotationOpt = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOpt[] = [];
  constructor(public details: string) {}

  addVote(votateOpt: VotationOpt): void {
    this._votationOptions.push(votateOpt);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOpt(): VotationOpt[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const opt of votation.votationOpt) {
        console.log(opt.option, opt.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const vot = new Votation('Qual sua linguagem favorita');
vot.addVote({ option: 'python', numberOfVotes: 0 });
vot.addVote({ option: 'javascript', numberOfVotes: 0 });
vot.addVote({ option: 'typescript', numberOfVotes: 0 });
vot.vote(1);
vot.vote(2);
vot.vote(2);
vot.vote(0);

const vot2 = new Votation('Qual sua cor favorita');
vot2.addVote({ option: 'vermelho', numberOfVotes: 0 });
vot2.addVote({ option: 'verde', numberOfVotes: 0 });
vot2.addVote({ option: 'azul', numberOfVotes: 0 });
vot2.addVote({ option: 'roxo', numberOfVotes: 0 });
vot2.addVote({ option: 'marrom', numberOfVotes: 0 });
vot2.vote(1);
vot2.vote(2);
vot2.vote(4);
vot2.vote(0);

const votApp = new VotationApp();
votApp.addVotation(vot);
votApp.addVotation(vot2);

votApp.showVotations();
