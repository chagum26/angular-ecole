import { Component, OnInit } from '@angular/core';
import { eleve } from './../models/eleve';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  eleve: eleve = {
    id: 1,
    nom: "Hugo LIEVRE",
    classe: "3A"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
