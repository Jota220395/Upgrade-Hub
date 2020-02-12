import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  //ese usuario , debe venir del componente padre asik ponemos el @input
  @Input() usuarioEditado: Usuario;


}
