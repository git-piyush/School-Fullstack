import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './student-components/studentdashboard/studentdashboard.component';
import { studentGuard } from '../../auth/guards/student-guard/student.guard';
import { ApplyLeaveComponent } from './student-components/apply-leave/apply-leave.component';
import { GetAllLeavesComponent } from './student-components/get-all-leaves/get-all-leaves.component';
import { UpdateStudentComponent } from './student-components/update-student/update-student.component';

const routes: Routes = [
  { path: "studentdashboard", component:StudentdashboardComponent, canActivate:[studentGuard] },
  { path: "leave", component:ApplyLeaveComponent, canActivate:[studentGuard] },
  { path: "leaves", component: GetAllLeavesComponent, canActivate:[studentGuard]},
  { path: "update", component: UpdateStudentComponent, canActivate:[studentGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
