import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { Room } from './room/room';
import { Home } from './home/home';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 👈 default redirect
  { path: 'home', component: Home },
  { path: 'todo', component: Todo },
  { path: 'room', component: Room }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
