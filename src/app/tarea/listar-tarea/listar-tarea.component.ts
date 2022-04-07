import { Tarea } from './../../modelo/tarea';
import { TareaService } from './../../servicios/tarea.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from 'src/app/utils/util';

@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.css']
})
export class ListarTareaComponent implements OnInit {
  tareas: Tarea [] = [];
  cargando = false;
  combobox = false;
  @Output() out = new EventEmitter<any>();
  constructor(
    private tareaService: TareaService,
    public router: Router,
    public route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.consultarTareas();
  }
  consultarTareas() {
    this.tareaService.get('tareas').subscribe((data) => {
      this.tareas = data;
      this.tareaService.add$(this.tareas);
    });
  }

  rediCrear(tarea:Tarea){
    if (!this.combobox) {
      this.router.navigate(['../../dashboard/crear-tarea', tarea.id], {
        relativeTo: this.route,
      });
    }else{
      this.out.emit(tarea);
    }
  }
  eliminar(tarea: Tarea){
    this.cargando = true;
    this.tareaService.delete('tarea/eliminar/'+tarea.id).subscribe(
      data => {
        this.tareas = data;
        Util.openSnackBar(this.snackBar, 'Se elimino la tarea con exíto', 3, 'bottom');
        this.cargando = false;
      },
      fault => {
        this.cargando = false;
      }, () => {

      }
    );
  }
}
