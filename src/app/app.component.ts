import { Component } from '@angular/core';
import { Persona } from './Persona.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // declaramos la propiedad con twobinding
  titulo = 'Listado de personas';

  // Creamos el array y creamos un objeto dentro del array
  personas:Persona[]=[
    new Persona({
      nombre:'Oscar',
      apellido:'Gamboa',
      edad:23,
      email:'oscar@mail.com',
    })
  ]
  agregar(persona:Persona){
    this.personas.push(persona)
  }

}
