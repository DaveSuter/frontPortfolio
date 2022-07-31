export class Experiencia {
    id?: number;
    puesto: String;
    empresa: String;
    fechaInicio: String;
    fechaFinalizacion: String;
    descripcion: String;

    constructor(puesto: String, empresa: String, fechaInicio: String, fechaFinalizacion: String, 
        descripcion: String){
            this.puesto = puesto;
            this.empresa = empresa;
            this.fechaInicio = fechaInicio;
            this.fechaFinalizacion = fechaFinalizacion;
            this.descripcion = descripcion;
        }
}
