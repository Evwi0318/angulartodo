import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-todo',
  standalone: true,
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo {
  task = [
    { name: 'Börja med inlämningen', done: true },
    { name: 'Göra klart Angular-koden', done: false },
  ];

  addTask(name: string, inputElement: HTMLInputElement) {
    if (name.trim() !== '') {
      this.task.push({ name: name, done: false });
      inputElement.value = '';
    }
  }

  changeStatus(task: any) {
    task.done = !task.done;
  }

  removeTask(taskToRemove: any) {
    this.task = this.task.filter((t) => t !== taskToRemove);
  }
}
