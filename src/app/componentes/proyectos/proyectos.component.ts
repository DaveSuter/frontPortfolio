import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projectList:any;
/*
  constructor(private datosPortfolio:PortfolioService) { }*/

  ngOnInit(): void {
    /*this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.projectList=data.projects;
    })*/
  }

}
