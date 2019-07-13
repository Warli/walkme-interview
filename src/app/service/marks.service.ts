import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http: HttpClient) { }

  get_marks() {
    const MARKS_URL = 'https://my-json-server.typicode.com/YonatanKra/demoStudentsServer/marks';

    return this.http.get(MARKS_URL);
  }
}
