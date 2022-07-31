import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  //miPortfolio:any;

  puesto: String = '';
  empresa: String = '';
  fechaInicio: String = '';
  fechaFinalizacion: String = '';
  descripcion: String = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const expe = new Experiencia(this.puesto, this.empresa, this.fechaInicio, this.fechaFinalizacion, 
      this.descripcion);
    this.experienciaService.save(expe).subscribe(data => { 
      alert("Experiencia agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al agregar experiencia");
      this.router.navigate(['']);
    }
    
    )
  }

}
