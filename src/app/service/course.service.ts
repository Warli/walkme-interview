import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  get_courses() {
    const COURSES_URL = 'https://my-json-server.typicode.com/YonatanKra/demoStudentsServer/courses';

    return this.http.get(COURSES_URL);
  }
}
