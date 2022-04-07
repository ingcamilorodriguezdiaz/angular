import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { ListarTareaComponent } from './tarea/listar-tarea/listar-tarea.component';
import { CrearTareaComponent } from './tarea/crear-tarea/crear-tarea.component';
import { DashboardComponent } from "./dashboard/dashboard.component";


export const routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'crear-tarea',
        component:CrearTareaComponent
      },
      {
        path: 'crear-tarea/:id',
        component:CrearTareaComponent
      },
      {
        path: 'listar-tarea',
        component:ListarTareaComponent
      },


      {
        path: 'crear-empleado',
        component:CrearEmpleadoComponent
      },
      {
        path: 'crear-empleado/:id',
        component:CrearEmpleadoComponent
      },
      {
        path: 'listar-empleado',
        component:ListarEmpleadoComponent
      },

    ]
  },
  { path: '**', redirectTo: '/dashboard/listar-tarea' },


];
