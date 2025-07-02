import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { Header } from './header/header';
import { Todo } from './todo/todo';
import { AppRoutingModule } from './app-routing-module';
import { Room } from './room/room';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@NgModule({
  declarations: [
    App,
    Header,
    Todo,
    Room,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
