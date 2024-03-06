import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent {
  teacherId: number = this.activatedRoute.snapshot.params['teacherId'];
  validateForm: FormGroup;
  isSpinning:boolean=false;

  GENDER: string[] = ["Male", "Female", "Not Specified"];

  constructor(private adminService : AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router : Router){}

    ngOnInit(){
      this.getTeacherById();
      this.validateForm = this.fb.group({
        name: [null, Validators.required],
        gender: [null, Validators.required],
        email: [null, Validators.required],
        department: [null, Validators.required],
        qualification: [null, Validators.required],
        address:[null, Validators.required],
        dob:[null, '']
      })

    }


    getTeacherById(){
      console.log(this.teacherId);
      this.adminService.getTeacherById(this.teacherId).subscribe((res)=>{
        console.log(res);
        this.validateForm.patchValue(res.teacherDTO);
      })

    }

    updateTeacher(){
      console.log(this.validateForm.value);
      this.adminService.updateTeacher(this.teacherId, this.validateForm.value).subscribe((res)=>{
        console.log(res);
      if(res.id!=null){
        this.snackBar.open("Teacher Updated successfully","Close",{ duration: 5000});
        this.router.navigateByUrl("/admin/teachers");
      }else{
        this.snackBar.open("Teacher not found","Close",{ duration: 5000});
      }
      })
    }
}
