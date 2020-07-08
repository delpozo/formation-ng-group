export class Rdv {
  id: number;
  motif: string;
  plageHoraire: Date;
  duree: number;

  constructor(id: number, motif: string, plageHoraire: Date, duree: number) {
    this.id = id;
    this.motif = motif;
    this.plageHoraire = plageHoraire;
    this.duree = duree;
  }
}
