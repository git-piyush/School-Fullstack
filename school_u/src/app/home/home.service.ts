import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8081/"]



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }

  getAllTeachers(): Observable<any>{
    return this.http.get(BASIC_URL+"teachers");
  }

  getChartData(): Observable<any>{
    return this.http.get(BASIC_URL+"chartdata");
  }


}
