import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent {
  validateForm: FormGroup;
  isSpinning:boolean=false;

  GENDER: string[] = ["Male", "Female", "Not Specified"];

  constructor(private adminService : AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar){}

    ngOnInit(){
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


    addTeacher(){
      console.log(this.validateForm.value);
      this.isSpinning = true;
      this.adminService.addTeacher(this.validateForm.value).subscribe((res)=>{
        this.isSpinning = false;
          console.log(res);
          if(res.id!=null){
            this.snackBar.open("Teacher added successfully", "Close",{duration:5000});
          }else if(res.id==null){
            this.snackBar.open("Somethinf went wrong","Close", {duration:5000});
          }
      })

    }

}
