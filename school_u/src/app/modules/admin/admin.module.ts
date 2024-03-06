import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admin-components/admindashboard/admindashboard.component';
import { AddStudentComponent } from './admin-components/add-student/add-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

///////////////
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import { UpdateStudentComponent } from './admin-components/update-student/update-student.component';
import { PayFeeComponent } from './admin-components/pay-fee/pay-fee.component';
import { AllLeavesComponent } from './admin-components/all-leaves/all-leaves.component';
import {MatMenuModule} from '@angular/material/menu';
import { AddTeacherComponent } from './admin-components/add-teacher/add-teacher.component';
import { GatAllTeachersComponent } from './admin-components/gat-all-teachers/gat-all-teachers.component';
import { UpdateTeacherComponent } from './admin-components/update-teacher/update-teacher.component';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    AddStudentComponent,
    AllStudentsComponent,
    UpdateStudentComponent,
    PayFeeComponent,
    AllLeavesComponent,
    AddTeacherComponent,
    GatAllTeachersComponent,
    UpdateTeacherComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    /////////////////
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AdminModule { }
