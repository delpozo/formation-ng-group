import {Component, Input, OnInit} from '@angular/core';
import {Exp} from '../../model/exp';
import {ExpService} from '../../service/exp.service';

@Component({
  selector: 'app-test-to-sayf',
  templateUrl: './test-to-sayf.component.html',
  styleUrls: ['./test-to-sayf.component.css']
})
export class TestToSayfComponent implements OnInit {

  @Input() nom: string;
  public ville = '';
  public Submit: boolean = false;

  public Exp = new Exp(this.nom);
  public Exps: Exp;
  constructor(
    private expService: ExpService
  ) { }

  ngOnInit(): void {
  }

  ajouterExp(){
    this.Exp.nom = this.nom;
    this.Exp.ville = this.ville;
    this.Exp.createdAt = new Date();
    this.Exp.updateAt = new Date();
    this.expService.create(this.Exp).subscribe(
      exp => {
        this.expService.findAll().subscribe(
          exp => {
            this.Submit = true;
            this.Exps = exp;
            console.log(this.Exps);
          },
          error => console.log(error)
        );
        //this.Exps = exp;
      },
      error => console.log(error)
    );
  }

}
