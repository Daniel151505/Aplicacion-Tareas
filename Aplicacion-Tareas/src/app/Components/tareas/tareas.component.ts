import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.models';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea [] = []
  nombreTarea= ''

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    //Crear un objeto Tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto tarea al Array
    this.listTareas.push(tarea)

    //Reset form
    this.nombreTarea = ''
  }

  eliminarTarea (index : number):void {
    this.listTareas.splice(index, 1)
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listTareas[index].estado = !tarea.estado
  }

}
