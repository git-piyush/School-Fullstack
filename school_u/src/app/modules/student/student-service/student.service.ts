import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8081/"];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http:HttpClient
  ) { }

  getStudentById(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+`api/student/${StorageService.getUserId()}`,{
      headers: this.createAuthHeader()
    })
  }

  applyLeave(studentLeaveDTO): Observable<any>{
    studentLeaveDTO.userId = StorageService.getUserId();
    return this.http.post<[]>(BASIC_URL+"api/student/leave",studentLeaveDTO,{
      headers: this.createAuthHeader()
    })
  }


  createAuthHeader(): HttpHeaders{
    let authHeaders : HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization', "Bearer "+StorageService.getToken()
    );
  }

}
