import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { DetalleEnvioTemp } from '../Models/detalle-envio-temp';


@Injectable({
  providedIn: 'root'
})
export class DetalleenviotempService {

  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  obtenerListaDetalleEnvioTemp():Observable<DetalleEnvioTemp[]>{

    let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/ListarDetalleEnvioTemp";
    let response = this.http.get<DetalleEnvioTemp[]>(direccion,this.httpOptions);
    return response;
  }


  registrarDetalleEnvioTemp(enviodett:DetalleEnvioTemp):Observable<any>{

    let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/crearDetalleEnvioTemp";
    let response = this.http.post<any>(direccion,enviodett,this.httpOptions);
    return response;
  }

  getDetalleEnvioTempById(id:number): Observable<any>{

    let direccion = this.BaseUrl + "CrudDetalleEnvioTemps/buscarDetalleEnvioTempById?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
 }

 editarDetalleEnvioTemp(enviodett:DetalleEnvioTemp):Observable<any>{
  let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/editarDetalleEnvioTemp";
  let response = this.http.post<any>(direccion,enviodett);
  console.log(response);
  return response;
}

eliminarDetalleEnvioTemp(id:number):Observable<any>{

  let direccion = this.BaseUrl + "CrudDetalleEnvioTemp/eliminarDetalleEnvioTemp?id="+id;
  let response = this.http.get<any>(direccion);
  console.log(response);
  return response;
}

}
