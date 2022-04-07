import { Tarea } from './../../modelo/tarea';
import { Util } from 'src/app/utils/util';
import { TareaService } from './../../servicios/tarea.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Validacion } from 'src/app/utils/validacion';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent implements OnInit {
  formulario: FormGroup;
  id:string;
  tarea: Tarea = new Tarea();
  estados = [{titulo:'ABIERTO',numero:1},{titulo:'CERRADO',numero:0}]
  cargando = false;
  constructor(private formBuilder: FormBuilder,
    public usuarioService: TareaService,
    private snackBar: MatSnackBar,
    public router: Router,
    public route: ActivatedRoute,) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.formulario = this.formBuilder.group({
      nombre: Validacion.getCampo(true),
    });
    this.tarea.estado = 1;
   }

  ngOnInit(): void {
    this.tareaMemoria();
  }

  tareaMemoria(){
    if(!Util.empty(this.id)){
      this.usuarioService.get$().subscribe(datas=>{
        for (const element of datas) {
          if(element.id == parseInt(this.id)){
              this.tarea = element;
            break;
          }
        }
      });
    }

  }

  onSubmit() {
    console.log(this.tarea.estado);
    if (this.formulario.invalid) {
      return;
    }
    this.cargando = true;
    if(Util.empty(this.id)){
      this.usuarioService.post('tarea/registrar', this.tarea).subscribe(
        data => {
          Util.openSnackBar(this.snackBar, 'Se guardo la tarea con exíto', 3, 'bottom');
          this.cargando = false;
        },
        fault => {
          this.cargando = false;
        }, () => {

          this.formulario.reset();
        }
      );
    }else{
      this.usuarioService.put('tarea/registrar', this.tarea).subscribe(
        data => {
          Util.openSnackBar(this.snackBar, 'Se actualizó la tarea con exíto', 3, 'bottom');
          this.cargando = false;
        },
        fault => {
          this.cargando = false;
        }, () => {

          this.formulario.reset();
        }
      );
    }


  }

}
