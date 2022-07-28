import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent implements OnInit {
  /*miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }*/

  persona: persona = new persona("","","","","","","","");
  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    /*this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio=data;
    });*/

    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}