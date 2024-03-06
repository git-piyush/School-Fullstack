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

  CLASS: string[] = ["Matriculation","Intermediate","Graduation","Post Graduation","Sports"];

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
      console.log(res);
      if(res.id!=null){
        this.snackBar.open("Student Update successfully","Close",{ duration: 5000});
        this.router.navigateByUrl("/admin/students");
      }else{
        this.snackBar.open("Student not found","Close",{ duration: 5000});
      }
    })
  }

}
