import { Tarea } from './../modelo/tarea';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { OperacionService } from './operacion-service';


@Injectable()
export class TareaService extends OperacionService {
  tarea$ = new BehaviorSubject<Tarea[]>([]);
  constructor(public http: HttpClient) {
    super(http);
  }

  add$(usuarios: Tarea[]) {
    this.tarea$.next(usuarios);
  }

  get$(): Observable<Tarea[]> {
    return this.tarea$.asObservable();
  }
}
