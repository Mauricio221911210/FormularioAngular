import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  mostrarMensajer=true;
  contador=1;
  materias:string[]=[

    "Gestion del proceso de desarrollo de sotware",
    "Aplicaciones web Progresivas",
    "Integradora",
    "Desarrollo Movil Integral",
    "Optativa 1: Creacion de videojuegos",
    "Negociacion empresarial",
    "Ingles IX"


  ];


  constructor() { }

  ngOnInit(): void {
  }

}
