import { Injectable } from "@angular/core";
import { Usuario } from "../entidades/usuario";

@Injectable({
  providedIn: "root"
})
export class AlmacenUsuariosService {
  private listaUsuarios: Usuario[];

  //Angular se encarga de instanciar el servicio(new) y
  //aki abajo en Almacen... reconoce k lo necesitamos x el tipo de parametro
  constructor() {
    this.listaUsuarios = [];
    this.cargarListaLocalStrg(); //para cargar los usuarios cuando se cargue la página
    if (
      this.listaUsuarios == null ||
      typeof this.listaUsuarios === "undefined"
    ) {
      this.listaUsuarios = [];
    }
  }
  insertar(usuario: Usuario) {
    //creamos los modulos a los que llamaremos
    let siYaExiste = false;

    for (let usu of this.listaUsuarios) {
      //recorremos el array del Json para ver si el Us. existe
      if (usu.email === usuario.email) {
        siYaExiste = true;
        break;
      }
    }

    if (siYaExiste) {
      alert("Usuario existente con el email " + usuario.email);
    } else {
      this.listaUsuarios.push(usuario);
      this.guardarListaLocalStrg();
      /* break */
    }
  }
  guardarListaLocalStrg() {
    //creamos el local storage para guardar los datos
    let textoJsonUsuarios = JSON.stringify(this.listaUsuarios);
    window.localStorage.setItem("listaUsuarios", textoJsonUsuarios); //guardamos en la caché del navegador (consola/aplication.. para verlo)
    //dandole un nombre(clave/key):listaUsuarios
    //es decir, SERIALIZAR y guardar
  }

  cargarListaLocalStrg() {
    //lo hacemos como arriba pero al revés
    //xk keremos sacar los items del LocalStorage (k los transforma en un Json)
    let textoJsonUsuarios = window.localStorage.getItem("listaUsuarios");
    //convertiemos el JSON en nun objeto de JS, es decir: DESSERIALIZAR
    this.listaUsuarios = JSON.parse(textoJsonUsuarios);
  }
  getListaUsuarios(){
    return this.listaUsuarios; 
  }
  eliminarUsuario(posicionUsu:number){
    /* this.laListaDeUsuarios.splice(posEliminar,1); */
    this.listaUsuarios.splice(posicionUsu,1);
    this.guardarListaLocalStrg()
    return true;
  }

  
}
