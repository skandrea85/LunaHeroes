import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  eroi=[ {nome:'superman',eta:35,sesso:true,segniParticolari:'vola',note:''},
  {nome:'hulk',eta:25,sesso:false,segniParticolari:'super forza',note:''},
  {nome:'catwoman',eta:20,sesso:true,segniParticolari:'agilità',note:''},
  {nome:'uomo ragno',eta:50,sesso:true,segniParticolari:'arrampicatore provetto',note:''}


]

message='maschio';

  constructor() { }

  ngOnInit(): void {
  }

}
