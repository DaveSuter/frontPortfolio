import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //ver si cargo una lista o un objeto con atributos
  educacionLista:any;

  //constructor(private datosPortfolio:PortfolioService) { }

  //lineas privisorias
  persona: persona = new persona("","","","","","","","");
  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    //this.datosPortfolio.obtenerDatos().subscribe(data=>{
      //this.educacionLista=data.educacion;
  //})

  //linea privisoria
  this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
