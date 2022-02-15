import { Component, Input } from '@angular/core';
import { Persona } from '../Persona.models';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  // Creamos los atributos para recibir del componente padre
  @Input() persona:Persona
  @Input() index:number

}
