import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //cargo atributos del constructor vacios
  persona: persona = new persona("","","","","","","","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})

  }

}
