import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //de acá llama al backend:
  URL = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  //observable hace peticiones/respuestas asincronas
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer');
  }
}
