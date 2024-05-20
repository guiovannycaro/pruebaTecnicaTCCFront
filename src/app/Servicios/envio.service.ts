import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Envio } from '../Models/envio';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {


  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  obtenerListaEnvios():Observable<Envio[]>{
    let direccion = this.BaseUrl + "CrudEnvio/ListarEnvio";
    let response = this.http.get<Envio[]>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  eliminarEnvio(id:number):Observable<any>{

    let direccion = this.BaseUrl + "CrudEnvio/eliminarEnvio?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
  }


  registrarEnvio(envio:Envio):Observable<any>{

    let direccion = this.BaseUrl + "CrudEnvio/crearEnvio";
    let response = this.http.post<any>(direccion,envio,this.httpOptions);
    return response;
  }

  editarEnvio(envio:Envio):Observable<any>{
    let direccion = this.BaseUrl + "CrudEnvio/editarEnvio";
    let response = this.http.post<any>(direccion,envio);
    console.log(response);
    return response;
  }


  getEnvioById(id:number): Observable<any>{

    let direccion = this.BaseUrl + "CrudEnvio/buscarEnvioById?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
 }

 enviarDatosTemporal(envio:Envio):Observable<any>{
  let direccion = this.BaseUrl + "CrudEnvio/enviarDatosTemporal";
  let response = this.http.post<any>(direccion,envio,this.httpOptions);
  return response;
 }



}
