import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './pages/course/course.component';
import { StatsComponent } from './pages/stats/stats.component';
import { StudentComponent } from './pages/student/student.component';
import { TableComponent } from './pageComponents/table/table.component';
import { ModalComponent } from './pageComponents/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StatsComponent,
    StudentComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
