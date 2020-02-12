import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
import { AlmacenUsuariosService } from '../../servicios/almacen-usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  laListaDeUsuarios: Usuario[];
  usuarioRelleno:Usuario;

  //3x1
  //1 - recibimos por parametro
  //2 - con el private, declaramos el campo(variable miembro)
  //3 - Hace la asignación
  constructor( private srvUsu: AlmacenUsuariosService) { 
  }
  //Cuando nace Angular invoca este método

  ngOnInit() {
    this.laListaDeUsuarios  = this.srvUsu.getListaUsuarios();
  }
  lanzarEditar(posEditar:number, usu:Usuario){
    this.usuarioRelleno = usu;
  }

  modificar(){
    this.srvUsu.guardarListaLocalStrg();
  }
  lanzarEliminar(posEliminar:number, usu:Usuario){
      if(this.srvUsu.eliminarUsuario(posEliminar)){
      alert(usu.nombre + " ha sido eliminado");
      } else{
        alert(usu.nombre + " No ha sido eliminado");

      }
    }
  

}
