import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtomAddComponent } from './componentes/buttom-add/buttom-add.component';
import { ButtomDelComponent } from './componentes/buttom-del/buttom-del.component';
import { ButtomEditComponent } from './componentes/buttom-edit/buttom-edit.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ExperienciaEditComponent } from './componentes/experiencia-edit/experiencia-edit.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeaderEditComponent } from './componentes/header-edit/header-edit.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtomAddComponent,
    ButtomDelComponent,
    ButtomEditComponent,
    EducacionComponent,
    ExperienciaComponent,
    ExperienciaEditComponent,
    HeaderComponent,
    HeaderEditComponent,
    NavbarComponent,
    ProyectosComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
