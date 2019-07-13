import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  get_students() {
    const STUDENTS_URL = 'https://my-json-server.typicode.com/YonatanKra/demoStudentsServer/students';

    return this.http.get(STUDENTS_URL);
  }
}
