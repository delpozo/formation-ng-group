import {User} from './user';

export class Patient extends User {

  constructor(id: number, username: string, password: string, nom: string, prenom: string, role: string) {
    super(id, username, password, nom, prenom, role);
  }
}