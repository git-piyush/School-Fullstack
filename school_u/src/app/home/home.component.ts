import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  teachers : any[] = [];

  constructor(private service: HomeService){}

  ngOnInit(){
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.service.getAllTeachers().subscribe((res)=>{
      console.log(res);
      this.teachers = res;
    })
  }

}
