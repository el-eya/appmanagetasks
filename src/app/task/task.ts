import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

  @Input() taskTitle="Aya Task ";
  @Input() isDone = false;
  @Output() remove = new EventEmitter<void>();
deleteTask(){
  this.remove.emit();
}
markAsDone() {
  this.isDone = !this.isDone;
  }
  
}
