export class User {
  id: number;
  username: string;
  pwd: string;
  nom: string;
  prenom: string;
  role: string;

  constructor(id: number, username: string, pwd: string, nom: string, prenom: string, role: string) {
    this.id = id;
    this.username = username;
    this.pwd = pwd;
    this.nom = nom;
    this.prenom = prenom;
    this.role = role;
  }
}
