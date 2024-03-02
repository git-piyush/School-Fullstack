import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {

  CLASS: string[] = ["Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"];

  GENDER: string[] = ["Male", "Female", "Not Specified"];

  isSpinning: boolean;
  validateForm: FormGroup;

  constructor(private service: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router : Router){}

    ngOnInit(): void {
      this.validateForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required], 
      password: ['', Validators.required], 
      checkPassword: ['', Validators.required], 
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      studentClass: ['', Validators.required],
      dob: ['', Validators.required], 
      address: ['', Validators.required],
      gender: ['', Validators.required],

        })
    }
postStudent(){
  console.log(this.validateForm.value);
  if(this.validateForm.value.password != this.validateForm.value.checkPassword){
    this.snackBar.open("Password Not Matching","Close",{ duration: 5000});
    return;
  };
  this.isSpinning = true;
  this.service.addStudent(this.validateForm.value).subscribe((res)=>{
    this.isSpinning = false;
    console.log("pk"+res);
    if(res.id != null){
      this.snackBar.open("Student Added successfully","Close",{ duration: 5000});
      this.router.navigateByUrl("/admin/students");
    }

  }, error=>{
    if(error.status == 302){
      this.isSpinning = false;
      this.snackBar.open("Student exist", "Close",{ duration: 5000});
    }
  })
}

}
