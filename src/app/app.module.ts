import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './To do/todo.component';
import { InreviewComponent } from './In review/inreview.component';
import { InprogressComponent } from './In progress/inprogress.component';
import { Routes,RouterModule, Route } from '@angular/router';
import { DoneComponent } from './Done/done.component';

const appRoutes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'inreview', component: InreviewComponent},
  {path: 'inprogress', component: InprogressComponent},
  {path: 'done', component: DoneComponent}
]

@NgModule({
  declarations: [
    AppComponent, TodoComponent, InreviewComponent, InprogressComponent, DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
