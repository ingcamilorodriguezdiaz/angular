import { Tarea } from './tarea';
export class Empleado {
  id:number;
  nombre: string;
  cedula: string;
  tareas: Tarea[] = [];
  constructor(){

  }

}
