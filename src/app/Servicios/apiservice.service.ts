import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';

import { Usuarios } from 'src/app/Models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(datos:any):Observable<any> {
    console.log("Login Service");
   let direccion = this.BaseUrl + "GestionUsuarios/validarUsuarios";

   let response = this.http.post<any>(direccion,datos);



   return response;
}


}
