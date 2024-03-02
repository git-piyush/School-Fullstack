import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentdashboardComponent } from './student-components/studentdashboard/studentdashboard.component';


@NgModule({
  declarations: [
    StudentdashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
