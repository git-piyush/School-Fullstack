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
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    AddStudentComponent,
    AllStudentsComponent
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
    MatCardModule
  ]
})
export class AdminModule { }
