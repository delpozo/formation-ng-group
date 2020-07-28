export class Exp{

  nom: string;
  ville: string;
  createdAt: Date;
  updateAt: Date;

  constructor(
    n?: string,
    v?: string,
    create?: Date,
    update?: Date
  ) {
    this.nom = n;
    this.ville = v;
    this.createdAt = create;
    this.updateAt = update;
  }
}
