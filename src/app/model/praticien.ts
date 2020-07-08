import {User} from './user';

export class Praticien extends User {
  specialite: string;
  adresse: string;

  constructor(id: number, username: string, password: string, nom: string, prenom: string, role: string, specialite: string, adresse: string) {
    super(id, username, password, nom, prenom, role);
    this.specialite = specialite;
    this.adresse = adresse;
  }
}
