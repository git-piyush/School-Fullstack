import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './student-components/studentdashboard/studentdashboard.component';
import { studentGuard } from '../../auth/guards/student-guard/student.guard';

const routes: Routes = [
  { path: "studentdashboard", component:StudentdashboardComponent, canActivate:[studentGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
