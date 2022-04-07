import { Empleado } from './../../modelo/empleado';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/modelo/tarea';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { ListarTareaComponent } from 'src/app/tarea/listar-tarea/listar-tarea.component';
import { Util } from 'src/app/utils/util';
import { Validacion } from 'src/app/utils/validacion';

@Component({
  selector: 'app-tareas-asignadas',
  templateUrl: './tareas-asignadas.component.html',
  styleUrls: ['./tareas-asignadas.component.css']
})
export class TareasAsignadasComponent implements OnInit {

  id:string;
  empleado: Empleado = new Empleado();
  cargando = false;
  constructor(
    public empleadoService: EmpleadoService,
    private snackBar: MatSnackBar,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

   }

  ngOnInit(): void {
    this.empleadoMemoria();
  }

  empleadoMemoria(){
    if(!Util.empty(this.id)){
      this.empleadoService.get$().subscribe(datas=>{
        for (const element of datas) {
          if(element.id == parseInt(this.id)){
              this.empleado = element;
              if(Util.empty(this.empleado.tareas) || this.empleado.tareas.length == 0){
                this.empleado.tareas = [];
              }
            break;
          }
        }
      });
    }
  }

  eliminar(tarea:Tarea){
    this.cargando = true;
    this.empleadoService.delete('empleado/eliminar/'+tarea.id).subscribe(
      data => {
        // this.empleados = data;
        Util.openSnackBar(this.snackBar, 'Se elimino el empleado con exíto', 3, 'bottom');
        this.cargando = false;
      },
      fault => {
        this.cargando = false;
      }, () => {

      }
    );
  }
}
