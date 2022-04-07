import { TareaService } from './servicios/tarea.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { routes } from './route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearTareaComponent } from './tarea/crear-tarea/crear-tarea.component';
import { ListarTareaComponent } from './tarea/listar-tarea/listar-tarea.component';
import { EmpleadoService } from './servicios/empleado.service';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { TareasAsignadasComponent } from './empleado/tareas-asignadas/tareas-asignadas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CrearTareaComponent,
    ListarTareaComponent,
    CrearEmpleadoComponent,
    ListarEmpleadoComponent,
    TareasAsignadasComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [EmpleadoService,TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
