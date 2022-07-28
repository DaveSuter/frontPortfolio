import { Component, OnInit, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaLista:any;
  //constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    //this.datosPortfolio.obtenerDatos().subscribe(data=>{
    //              this.experienciaLista=data.experiencia;
    //})
  }

  /*deleteExp(item:any){
    this.datosPortfolio.deleteItem(item).subscribe(()=>(
      this.experienciaLista = this.experienciaLista.filter( (t: { id: number | undefined; }) => t.id !== item.id)
    ))
  }*/

}