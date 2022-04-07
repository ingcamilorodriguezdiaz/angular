import { Tarea } from './../modelo/tarea';
import { TareaService } from './../servicios/tarea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tareas: Tarea[] = [];
  menus = [

      {
        titulo: 'Tareas',
        subMenus: [
          { titulo: 'Consultar', ruta: '/dashboard/listar-tarea' },
          { titulo: 'Crear', ruta: '/dashboard/crear-tarea' },
        ],
      },
      {
        titulo: 'Empleados',
        subMenus: [
          { titulo: 'Consultar', ruta: '/dashboard/listar-empleado' },
          { titulo: 'Crear o asingar tarea', ruta: '/dashboard/crear-empleado' },
        ],
      },


  ];
  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {}
}
