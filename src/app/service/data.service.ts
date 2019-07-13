import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get_data() {
    const DATA_URL = 'https://my-json-server.typicode.com/YonatanKra/demoStudentsServer/db';

    return this.http.get(DATA_URL);
  }
}
