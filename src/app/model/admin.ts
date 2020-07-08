import {User} from './user';

export class Admin extends User {

  constructor(id: number, username: string, pwd: string, nom: string, prenom: string, role: string) {
    super(id, username, pwd, nom, prenom, role);
  }
}
