import { Tarea } from './../../modelo/tarea';
import { ListarTareaComponent } from './../../tarea/listar-tarea/listar-tarea.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Util } from 'src/app/utils/util';
import { Validacion } from 'src/app/utils/validacion';
import { Empleado } from './../../modelo/empleado';
import { EmpleadoService } from './../../servicios/empleado.service';
import { utils } from 'protractor';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  formulario: FormGroup;
  id:string;
  empleado: Empleado = new Empleado();
  tarea: Tarea = new Tarea();
  cargando = false;
  constructor(private formBuilder: FormBuilder,
    public empleadoService: EmpleadoService,
    private snackBar: MatSnackBar,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.formulario = this.formBuilder.group({
      nombre: Validacion.getCampo(true),
      cedula: Validacion.getCampo(true),
      tarea: Validacion.getCampoDisabled(false,true),
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
                this.empleado.tareas.push(new Tarea());
              }
            break;
          }
        }
      });
    }

  }

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }
    this.empleado.tareas = [];
    if(!Util.empty(this.tarea) && !Util.empty(this.tarea.id)){
      this.empleado.tareas.push(this.tarea);
    }
    this.cargando = true;
    if(Util.empty(this.id)){


      this.empleadoService.post('empleado/registrar', this.empleado).subscribe(
        data => {
          Util.openSnackBar(this.snackBar, 'Se guardo el empleado con exíto', 3, 'bottom');
          this.cargando = false;
        },
        fault => {
          if(!Util.empty(this.tarea) && !Util.empty(this.tarea.id)){
            Util.openSnackBar(this.snackBar, 'Ocurrio un error asignando la tarea', 3, 'top');
          }
          this.cargando = false;
        }, () => {

          this.formulario.reset();
        }
      );
    }else{

      this.empleadoService.put('empleado/registrar', this.empleado).subscribe(
        data => {
          Util.openSnackBar(this.snackBar, 'Se actualizó el empleado con exíto', 3, 'bottom');
          this.cargando = false;
        },
        fault => {
          if(!Util.empty(this.tarea) && !Util.empty(this.tarea.id)){
            Util.openSnackBar(this.snackBar, 'Ocurrio un error asignando la tarea', 3, 'top');
          }

          this.cargando = false;
        }, () => {

          this.formulario.reset();
        }
      );
    }


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ListarTareaComponent, {
      width: '80vw',
      height: '80vh'
    });
    dialogRef.componentInstance.combobox = true;
    dialogRef.componentInstance.out.subscribe((element: any) => {
      const tarea = new Tarea();
      tarea.id = element.id;
      tarea.nombre = element.nombre;
      this.empleado.tareas = [];
      this.tarea = tarea;
      dialogRef.close();
    });
  }

}
