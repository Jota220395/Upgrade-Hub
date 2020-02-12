import { Component } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { AlmacenUsuariosService } from '../../servicios/almacen-usuarios.service';

@Component({
    //caracteristicas  y configuración(metadatos)
    selector:'app-crear-usuario',
    templateUrl: './crea-usuario.component.html',
     //plantillas
     styleUrls:['./crear-usuario.component.css']
})

export class CrearUsuarioComponent{
    //Datos del UI y su funcionalidad / también llamado modelo del componente
    titulo: string = "выполнять докумеит";
    usuarioNuevo: Usuario;
    srvUsuarios: AlmacenUsuariosService;
    camposInvalidos = false;

    constructor(srvUsu: AlmacenUsuariosService){
    this.usuarioNuevo = new Usuario();
    this.usuarioNuevo.nombre = "Juanjo";
    this.usuarioNuevo.email = "usuario@email.com";
    this.srvUsuarios = srvUsu;
    }
    registrarAlPulsarClick():void{
        console.log("click ok " +this.usuarioNuevo.nombre);
        console.log("click ok "+ this.usuarioNuevo.password);
        if (typeof this.usuarioNuevo.nombre === "undefined"
            || this.usuarioNuevo.nombre === null
            || this.usuarioNuevo.nombre.length < 2) 
        {
            this.camposInvalidos = true;
        } 
        else {
            this.srvUsuarios.insertar(this.usuarioNuevo);
            this.usuarioNuevo = new Usuario();
        
            this.camposInvalidos = false;


        }
    }

    
}

            