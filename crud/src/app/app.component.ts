import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: any;

  title:string = 'TAREAS PENDIENTES ABM';

  task = {
    title: '',
    detail: '',
    state: '',
  };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.retrieveTasks();
  }
  
  retrieveTasks(): void {
    this.appService.getAll()
      .subscribe(
        data => {
          this.tasks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }
      
  // employees = [
  //   {titulo: 'Wally con amigos', detalle:'comenzar martes',estado:'Vigente' },
  //   {titulo: 'Aprender Angular', detalle:'comenzar Julio',estado:'Vigente'},
  //   {titulo: 'Enviar informes Auditoria', position:'terminado agosto sin errores',estado:'terminado'},
  // ];
  model:any = {};
  model2:any = {};

  // addEmployee():void{
  //   this.employees.push(this.model);
  // }
  saveTask(): void {
    const data = {
      title: this.task.title,
      detail: this.task.detail,
      state: this.task.state
    };

    this.appService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.refresh();
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(id: number): void {
    this.appService.delete(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    // this.refresh();
  }

  myValue:any;
  editEmployee(i:any):void{}/*
    this.model2.titulo = this.employees[i].titulo;
    this.model2.detalle = this.employees[i].detalle;
    this.model2.estado = this.employees[i].estado;
    this.myValue=i;

  }*/
  updateEmployee():void{}/*

    let i = this.myValue;

    for(let j=0; j<this.employees.length;j++)
    {
      if(i==j)
      {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }

    console.log(this.model2)

  }*/
  refresh(): void { window.location.reload(); }

}