import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8080/api/usuarios';

  private httpHeaders = new HttpHeaders({'Content-Type': 'aplication/json'})


  constructor(
    private httpClient: HttpClient
  ) { }

   public addUser(user:any) {
    return this.httpClient.post(this.url, user, {headers: this.httpHeaders} );

   }

}
