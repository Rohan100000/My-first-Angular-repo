import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importing a new module
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoAddComponent,
    TodoListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  //adding an import module
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
