import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'TAREAS PENDIENTES ABM';

  employees = [
    {name: 'Wally con amigos', position:'comenzar martes',estado:'Vigente' },
    {name: 'Aprender Angular', position:'comenzar Julio',estado:'Vigente'},
    {name: 'Enviar informes Auditoria', position:'terminado agosto sin errores',estado:'terminado'},

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
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
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