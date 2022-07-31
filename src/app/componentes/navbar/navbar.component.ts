import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogged = new PortfolioComponent().isLoggedM();
  
  isLogginFail = false;
  loginUsuario!:LoginUsuario;
  userName!:String;
  password!:String;
  errMsj!:String;

  ngOnInit(): void {
    //comparar user y pass
    //modificar isLogged
  }

  
  onLogin(): void{
    //this.loginUsuario = new LoginUsuario(this.userName, this.password)
    console.log(this.userName);
    console.log(this.password);
  }

  onLogout(): void {
    //refrescar ventana
    //modificar isLogged
  }



}
