export class User {
  id: number;
  username: string;
  password: string;
  nom: string;
  prenom: string;
  role: string;

  constructor(id: number, username: string, password: string, nom: string, prenom: string, role: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.role = role;
  }
}
