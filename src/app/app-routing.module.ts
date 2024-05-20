import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Vistas/login/login.component';
import { DashboardComponent } from './Vistas/dashboard/dashboard.component';
import { UsuariosComponent } from './Vistas/usuarios/usuarios.component';
import { ClientesComponent } from './Vistas/clientes/clientes.component';
import { EnviosComponent } from './Vistas/envios/envios.component';
import { ProductosComponent } from './Vistas/productos/productos.component';

const routes: Routes = [
  {path: '' , redirectTo:'login' , pathMatch:'full'},
  {path:'Usuarios' , component: UsuariosComponent},
  {path:'Clientes' , component: ClientesComponent},
  {path:'Envios' , component: EnviosComponent },
  {path:'Productos' , component: ProductosComponent},
  {path:'home' , component: DashboardComponent},
  {path:'login' , component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UsuariosComponent,ClientesComponent,EnviosComponent,ProductosComponent,DashboardComponent,LoginComponent
]
