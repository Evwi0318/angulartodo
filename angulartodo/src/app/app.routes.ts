import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { About } from './about/about';

export const routes: Routes = [
  { path: 'todo', component: Todo },
  { path: 'about', component: About },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
];
