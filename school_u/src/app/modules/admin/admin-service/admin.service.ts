import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';


const BASIC_URL = ["http://localhost:8081/"]

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addStudent(studentDTO: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + "api/admin/student",studentDTO,{
      headers: this.createAuthHeader()
    });
  }

  getAllStudents(): Observable<any>{
    return this.http.get<[]>(BASIC_URL+"api/admin/students",{
      headers: this.createAuthHeader()
    })
  }

  deleteStudent(studentId: any): Observable<any>{
    return this.http.delete<[]>(BASIC_URL+`api/admin/student/${studentId}`,{
      headers: this.createAuthHeader()
    })
  }

  getStudentById(studentId: any): Observable<any>{
    return this.http.get<[]>(BASIC_URL+`api/admin/student/${studentId}`,{
      headers: this.createAuthHeader()
    })
  }

  updateStudent(studentId:number,studentDTO: any): Observable<any>{
    
    return this.http.put<[]>(BASIC_URL + `api/admin/student/${studentId}`,studentDTO,{
      headers: this.createAuthHeader()
    });
  }

  payFee(studentId: number, feeDto: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + `api/admin/fee/${studentId}`,feeDto,{
      headers: this.createAuthHeader()
    });
  }

  getAllLeaves(): Observable<any>{
    console.log("before call"+StorageService.getToken());
    return this.http.get<[]>(BASIC_URL + "api/admin/leaves",{
      headers: this.createAuthHeader()
    })
  }

  changeLeaveStatus(leaveId: number, status:string): Observable<any>{
    console.log("before call"+leaveId+" "+status);
    return this.http.get<[]>(BASIC_URL+`api/admin/leave/${leaveId}/${status}`,{
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
