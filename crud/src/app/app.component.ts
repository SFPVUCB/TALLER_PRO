import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'TAREAS PENDIENTES ABM';

  employees = [
    {titulo: 'Wally con amigos', detalle:'comenzar martes',estado:'Vigente' },
    {titulo: 'Aprender Angular', detalle:'comenzar Julio',estado:'Vigente'},
    {titulo: 'Enviar informes Auditoria', position:'terminado agosto sin errores',estado:'terminado'},

  ];
  model:any = {};
  model2:any = {};

  addEmployee():void{
    this.employees.push(this.model);

  }
  deleteEmployee():void{

  }
  myValue:any;
  editEmployee(i:any):void{
    this.model2.titulo = this.employees[i].titulo;
    this.model2.detalle = this.employees[i].detalle;
    this.model2.estado = this.employees[i].estado;
    this.myValue=i;

  }
  updateEmployee():void{

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

  }

}