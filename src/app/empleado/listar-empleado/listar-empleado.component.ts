import { MatDialog } from '@angular/material/dialog';
import { TareasAsignadasComponent } from './../tareas-asignadas/tareas-asignadas.component';
import { EmpleadoService } from './../../servicios/empleado.service';
import { Empleado } from './../../modelo/empleado';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/modelo/tarea';
import { TareaService } from 'src/app/servicios/tarea.service';
import { Util } from 'src/app/utils/util';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados: Empleado [] = [];
  cargando = false;
  combobox = false;
  constructor(
    public dialog: MatDialog,
    private empleadoService: EmpleadoService,
    public router: Router,
    public route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.consultarEmpleados();
  }
  consultarEmpleados() {
    this.empleadoService.get('empleados').subscribe((data) => {
      this.empleados = data;
      this.empleadoService.add$(this.empleados);
    });
  }

  rediCrear(empleado:Empleado){
      this.router.navigate(['../../dashboard/crear-empleado', empleado.id], {
        relativeTo: this.route,
      });
  }
  eliminar(empleado: Empleado){
    this.cargando = true;
    this.empleadoService.delete('empleado/eliminar/'+empleado.id).subscribe(
      data => {
        this.empleados = data;
        Util.openSnackBar(this.snackBar, 'Se elimino el empleado con exíto', 3, 'bottom');
        this.cargando = false;
      },
      fault => {
        this.cargando = false;
      }, () => {

      }
    );
  }

  openDialog(empleado: Empleado): void {
    const dialogRef = this.dialog.open(TareasAsignadasComponent, {
      width: '80vw',
      height: '80vh'
    });
    dialogRef.componentInstance.empleado = empleado;

  }
}
