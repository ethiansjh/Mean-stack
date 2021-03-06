import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
    pageTitle: string = 'CRIME LIST';
    tasks: Task[];

    constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                console.log(tasks);
                this.tasks = tasks;
            });
    }
}