import { Component } from "@angular/core";

@Component({
    //caracteristicas  y configuración(metadatos)
    selector:'app-componente-raiz',
    template: 
    `<h1>{{titulo}}</h1>  
    
    <router-outlet></router-outlet>`//plantillas
})

export class AplicacionComponent{
    //Datos del UI y su funcionalidad / también llamado modelo del componente
    titulo: string = "Gestión de usuarios";
}

            