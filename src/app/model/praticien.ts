import {User} from './user';
import {Adresse} from './adresse';

export class Praticien extends User {
  specialite: string;
  adresse: Adresse;
  tel: number;
  tarif: number;



  constructor(id?: number, username?: string, pwd?: string, nom?: string, prenom?: string,
              role?: string, specialite?: string, adresse?: Adresse, tel?: number, tarif?: number) {
    super(id, username, pwd, nom, prenom, role);
    this.specialite = specialite;
    this.adresse = adresse;
    this.tarif = tarif;
    this.tel = tel;





  }
}
