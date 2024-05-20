import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { DetalleEnvio } from '../Models/detalle-envio';
import { Productos } from '../Models/productos';
import { catchError } from 'rxjs/operators';
import { DatosEnvio } from '../Models/datosEnvio';
import { DetalleEnvioTemp } from '../Models/detalle-envio-temp';


@Injectable({
  providedIn: 'root'
})
export class DetalleEnvioService {


  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  obtenerListaDetalleEnvio():Observable<DetalleEnvio[]>{
    let direccion = this.BaseUrl + "CrudDetalleEnvio/ListarDetalleEnvio";
    let response = this.http.get<DetalleEnvio[]>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  eliminarDetalleEnvio(id:number):Observable<any>{

    let direccion = this.BaseUrl + "CrudDetalleEnvio/eliminarDetalleEnvio?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
  }


  registrarDetalleEnvio(envio:DatosEnvio):Observable<any>{

    let direccion = this.BaseUrl + "CrudDetalleEnvio/crearDetalleEnvio";
    let response = this.http.post<any>(direccion,envio,this.httpOptions);
    return response;
  }

  editarDetalleEnvio(envio:DetalleEnvio):Observable<any>{
    let direccion = this.BaseUrl + "CrudDetalleEnvio/editarDetalleEnvio";
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


 obtenerListaDetalleEnvioById(id:number):Observable<DetalleEnvioTemp[]>{
  let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/buscarDetalleEnvioTempById?id="+id;
  console.log(direccion);
  let response = this.http.get<DetalleEnvioTemp[]>(direccion,this.httpOptions);
  console.log(response);
  return response;

 }

 registrarDetalleEnvioTemp(envio:DatosEnvio){

  let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/crearDetalleTempEnvio";
    let response = this.http.post<any>(direccion,envio,this.httpOptions);
    return response;
 }

 eliminarDetalleEnvioTemp(id:String){
  let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/eliminarDetalleEnvioTemp?id="+id;
  let response = this.http.get<any>(direccion);
  console.log(response);
  return response;

 }

}
