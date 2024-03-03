import { Component } from '@angular/core';
import { StudentService } from '../../student-service/student.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.scss'
})
export class StudentdashboardComponent {

  student: any;

  constructor(private service: StudentService){}

  ngOnInit(){
    this.getStudentById();
  }

  getStudentById(){
    this.service.getStudentById().subscribe((res)=>{
      console.log(res);
      this.student = res.studentDTO;
    })
  }

}
