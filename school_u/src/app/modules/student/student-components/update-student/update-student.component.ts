import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student-service/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent {

  CLASS: string[] = ["Matriculation","Intermediate","Graduation","Post Graduation","Sports"];

  GENDER: string[] = ["Male", "Female", "Not Specified"];

  isSpinning: boolean;
  validateForm: FormGroup;

  constructor(private service: StudentService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router : Router){}

    ngOnInit(): void {
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

    this.getStudentById();
    }

    getStudentById(){
      this.service.getStudentById().subscribe((res) =>{
        console.log(res);
        const student = res.studentDTO;
        this.validateForm.patchValue(student);
      })
    }

    updateStudent(){
      this.isSpinning = true;
      this.service.updateStudent(this.validateForm.value).subscribe((res)=>{
        console.log(res);
        this.isSpinning = false;
        if(res.id!=null){
          this.snackBar.open('Record updated successfully','Close',{
            duration: 5000
          });
          this.getStudentById();
        }else{
          this.snackBar.open("Student not found", 'Close',{
            duration:5000
          })
        }
      })
    }

}
