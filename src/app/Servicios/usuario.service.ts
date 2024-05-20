import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuarios } from '../Models/usuarios';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

obtenerListaUsuarios():Observable<Usuarios[]>{

  let direccion = this.BaseUrl + "CrudUsuarios/ListarUsuarios";
  let response = this.http.get<Usuarios[]>(direccion,this.httpOptions);
  return response;
}

registrarUsuarios(usuarios:Usuarios):Observable<any>{

  let direccion = this.BaseUrl + "CrudUsuarios/crearUsuarios";
  let response = this.http.post<any>(direccion,usuarios,this.httpOptions);
  return response;
}

  getusuarioById(id:number): Observable<any>{

    let direccion = this.BaseUrl + "CrudUsuarios/buscarUsuariosById?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
 }

editarUsuario(usuarios:Usuarios):Observable<any>{
    let direccion = this.BaseUrl + "CrudUsuarios/editarUsuarios";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
}

eliminarUsuario(id:number):Observable<any>{

    let direccion = this.BaseUrl + "CrudUsuarios/eliminarUsuarios?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
  }


}
