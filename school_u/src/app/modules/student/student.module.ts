import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentdashboardComponent } from './student-components/studentdashboard/studentdashboard.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ApplyLeaveComponent } from './student-components/apply-leave/apply-leave.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GetAllLeavesComponent } from './student-components/get-all-leaves/get-all-leaves.component';
import { UpdateStudentComponent } from './student-components/update-student/update-student.component';


@NgModule({
  declarations: [
    StudentdashboardComponent,
    ApplyLeaveComponent,
    GetAllLeavesComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    /////////////////
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class StudentModule { }
