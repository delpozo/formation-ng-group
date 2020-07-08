export class Rdv {
  id: number;
  motif: string;
  plage: Date;
  duree: number;
  patient: number;
  praticien: number;

  constructor(id?: number, motif?: string, plage?: Date, duree?: number) {
    this.id = id;
    this.motif = motif;
    this.plage = plage;
    this.duree = duree;
  }
}
