import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  miPortfolio:any;

  //provisorio
  constructor(private datosPersona:PersonaService) { }

  ngOnInit(): void {
    //provisorio
    this.datosPersona.getPersona().subscribe(data =>{
      this.miPortfolio=data;
    });
  }

}
