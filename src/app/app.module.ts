import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './pages/course/course.component';
import { StatsComponent } from './pages/stats/stats.component';
import { StudentComponent } from './pages/student/student.component';
import { TableComponent } from './pageComponents/table/table.component';
import { ModalComponent } from './pageComponents/modal/modal.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'students', component: StudentComponent},
  { path: 'courses', component: CourseComponent },
  { path: 'stats', component: StatsComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', component: StudentComponent }
];

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
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
