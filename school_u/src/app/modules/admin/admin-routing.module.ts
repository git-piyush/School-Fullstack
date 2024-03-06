import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin-components/admindashboard/admindashboard.component';
import { adminGuard } from '../../auth/guards/admin-guard/admin.guard';
import { AddStudentComponent } from './admin-components/add-student/add-student.component';
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import { UpdateStudentComponent } from './admin-components/update-student/update-student.component';
import { PayFeeComponent } from './admin-components/pay-fee/pay-fee.component';
import { AllLeavesComponent } from './admin-components/all-leaves/all-leaves.component';
import { AddTeacherComponent } from './admin-components/add-teacher/add-teacher.component';
import { GatAllTeachersComponent } from './admin-components/gat-all-teachers/gat-all-teachers.component';
import { UpdateTeacherComponent } from './admin-components/update-teacher/update-teacher.component';

const routes: Routes = [
 { path:"admindashboard", component : AdmindashboardComponent, canActivate:[adminGuard] },
 {path:"student",component:AddStudentComponent, canActivate:[adminGuard]},
 {path:"students",component:AllStudentsComponent, canActivate:[adminGuard]},
 {path:"student/:studentId",component:UpdateStudentComponent, canActivate:[adminGuard]},
 {path:"fee/:studentId",component:PayFeeComponent, canActivate:[adminGuard]},
 {path:"leaves",component:AllLeavesComponent, canActivate:[adminGuard]},
 {path:"teacher",component:AddTeacherComponent, canActivate:[adminGuard]},
 {path:"teachers",component:GatAllTeachersComponent, canActivate:[adminGuard]},
 {path:"teacher/:teacherId",component:UpdateTeacherComponent, canActivate:[adminGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
