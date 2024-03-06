import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gat-all-teachers',
  templateUrl: './gat-all-teachers.component.html',
  styleUrl: './gat-all-teachers.component.scss'
})
export class GatAllTeachersComponent {

  teachers = [];

  constructor(private service: AdminService,
    private snackbar: MatSnackBar){}

  ngOnInit(){
    console.log("Get teachers1")
    this.getAllTeachers();
  }

  getAllTeachers(){
    console.log("Get teachers2")
    this.service.getAllTeachers().subscribe((res)=>{
      console.log(res);
      this.teachers = res;
    })
  }

  deleteTeacher(teacherId:number){
    console.log(teacherId);
    this.service.deleteTeacher(teacherId).subscribe((res)=>{
      console.log("pk"+res);
      this.getAllTeachers();
      this.snackbar.open("Teacher deleted successfully","Close",{duration:5000})
    })
  }

}
