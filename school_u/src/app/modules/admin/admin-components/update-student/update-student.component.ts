import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent {

  validateForm: FormGroup;

  studentId : number = this.activatedRoute.snapshot.params['studentId']
  isSpinning: boolean;

  CLASS: string[] = ["Play","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th"];

  GENDER: string[] = ["Male", "Female", "Not Specified"];


  constructor(
    private service: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router : Router
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required], 
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      studentClass: ['', Validators.required],
      dob: ['', Validators.required], 
      address: ['', Validators.required],
      gender: ['', Validators.required],

        })
    this.getStudentById()
  }

  getStudentById(){
    this.service.getStudentById(this.studentId).subscribe((res)=>{
      const student = res.studentDTO;
      this.validateForm.patchValue(student);
      console.log(res);
    })
  }

  updateStudent(){
    this.service.updateStudent(this.studentId, this.validateForm.value).subscribe((res)=>{
      console.log("update student before call"+res);
      if(res.id!=null){
        this.snackBar.open("Student Update successfully","Close",{ duration: 5000});
        this.router.navigateByUrl("/admin/students");
      }else{
        this.snackBar.open("Student not found","Close",{ duration: 5000});
      }
    })
  }

}
