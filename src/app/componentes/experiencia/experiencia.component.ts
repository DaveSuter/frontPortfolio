import { Component, OnInit, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //experienciaLista:any;
  //constructor(private datosPortfolio:PortfolioService) { }

  experiencia: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService){}

  isLogged = new PortfolioComponent().isLoggedM();

  ngOnInit(): void {
    //this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //              this.experienciaLista=data.experiencia;
    //})

    this.cargarExperiencia();
    //comparar si esta logueado para permitir edicion



  }

  /*deleteExp(item:any){
    this.datosPortfolio.deleteItem(item).subscribe(()=>(
      this.experienciaLista = this.experienciaLista.filter( (t: { id: number | undefined; }) => t.id !== item.id)
    ))
  }*/

  cargarExperiencia(): void{
    this.experienciaService.lista().subscribe(
      data => {this.experiencia = data;}
    )
  }

}