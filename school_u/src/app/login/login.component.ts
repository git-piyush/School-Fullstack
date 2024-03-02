import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../auth/services/storage/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup | undefined;

  

  constructor(
    private service : AuthService,
    private fb : FormBuilder,
    private router : Router,
    private snackbar: MatSnackBar
  ){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['',Validators.required]
    })
  }

  // login(){
  //   console.log(this.loginForm.value);
  //   this.service.login(this.loginForm.value).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }


  login(){
    console.log(this.loginForm.value);
    this.service.login(
      this.loginForm.get(['email'])!.value,
      this.loginForm.get(['password'])!.value,
      ).subscribe((res)=>{
      console.log(res);
      if(StorageService.isAdminLoggedIn()){
        this.router.navigateByUrl("/admin/admindashboard");
      }else if(StorageService.isStudentLoggedIn()){
        this.router.navigateByUrl("/student/studentdashboard");
      }
    }),
    error => {
      if(error.status==406){
        this.snackbar.open("user is not active","Close",{
          duration: 5000
        });
        
      }else{
        this.snackbar.open("Bad credentials", "Close");
        duration:5000
      }
    }
  }

}
