import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../modelos/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuURL = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  public loguear(){
    
  }
}
