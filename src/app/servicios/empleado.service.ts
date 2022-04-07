import { Empleado } from './../modelo/empleado';
import { Tarea } from './../modelo/tarea';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { OperacionService } from './operacion-service';


@Injectable()
export class EmpleadoService extends OperacionService {
  empleados$ = new BehaviorSubject<Empleado[]>([]);
  constructor(public http: HttpClient) {
    super(http);
  }

  add$(empleados: Empleado[]) {
    this.empleados$.next(empleados);
  }

  get$(): Observable<Empleado[]> {
    return this.empleados$.asObservable();
  }
}
