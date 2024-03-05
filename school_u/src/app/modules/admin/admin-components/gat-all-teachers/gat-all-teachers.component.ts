import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-gat-all-teachers',
  templateUrl: './gat-all-teachers.component.html',
  styleUrl: './gat-all-teachers.component.scss'
})
export class GatAllTeachersComponent {

  teachers = [];

  constructor(private service: AdminService){}

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

}
