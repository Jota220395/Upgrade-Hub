import { NgModule, Component } from "@angular/core/";
import {BrowserModule} from '@angular/platform-browser';
import { AplicacionComponent} from './componentes/aplicacion.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { FormsModule} from '@angular/forms';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';

const rutasApp :Routes =[
    {path:"menu",
    component:MenuComponent},
    {path:"crear",
    component:CrearUsuarioComponent},
    {path:"lista",
    component:ListaUsuariosComponent},
    {path:"",
    redirectTo:"/menu",
    pathMatch:"full"},
    {path:"**",
    component:ErrorComponent}
    
]
@NgModule({
    declarations:[
        AplicacionComponent,
        CrearUsuarioComponent,
        ListaUsuariosComponent,
        EditarUsuarioComponent,
        MenuComponent,
        ErrorComponent
    ],
imports: [BrowserModule,FormsModule,
    RouterModule.forRoot(rutasApp,{enableTracing:true})],
bootstrap:[AplicacionComponent]
})


export class AppModule {
        //este módulo puede ser una clase vacía
}

