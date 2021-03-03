import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = 'http://localhost/api';
  constructor(private http: HttpClient) { }

  registro(datos){
    return this.http.post(`${this.url}registro.php`,JSON.stringify(datos));
  }
}
