import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../Persona.models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  // Tenemos que enviar la informacion al componente padre que es app
  @Output() enviarDato= new EventEmitter<Persona>()

  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;

  agregarPersona(){
    // Instanciamos un objeto a la clase Persona
    let persona01 = new Persona({
      nombre:this.nombre,
      apellido:this.apellido,
      edad:this.edad,
      email:this.email,
      facebook:this.facebook,
      twitter:this.twitter,
      instagram:this.instagram
    })

    // Agregamos el objeto al array declarado anteriormente
    // this.personas.push(persona01)


    // Enviamos el objeto al componente padre
    this.enviarDato.emit(persona01)
  }

}
