import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SesionService } from 'src/app/auth/services/sesion.service';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private dialog: MatDialog, private sesionService: SesionService){}

  addTask():void{
    //console.log('add task');
    const dialogRef = this.dialog.open(AddTaskFormComponent);

    dialogRef.afterClosed().subscribe(() => {
      //console.log(this.sesionService.getActiveUser());

    });
  }

}
