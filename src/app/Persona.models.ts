// Aqui creamos la clase modelo para instanciar objetos y agregarlas al array

export class Persona{
    nombre:string
    apellido:string
    edad:number
    email:string
    socialNetwork:{
        facebook?:string,
        twitter?:string,
        instagram?:string
    }
    constructor({
        nombre='',
        apellido='',
        edad=0,
        email='',
        facebook='',
        twitter='',
        instagram=''
    }){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.email=email
        this.socialNetwork={
            facebook,
            twitter,
            instagram
        }

    }
}