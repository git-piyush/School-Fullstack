import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrl: './pay-fee.component.scss'
})
export class PayFeeComponent {
    MONTH: string[] = [
      "January", "February", "March", "April", "May", "June","July", "August", "September","October", "November", "December"];

      isSpinning: boolean = false;
      validateForm: FormGroup;
      studentId: number = this.activatedroute.snapshot.params['studentId'];
  
    constructor(
      private service: AdminService,
      private activatedroute: ActivatedRoute,
      private fb: FormBuilder,
      private snackbar: MatSnackBar

    ){}

    ngOnInit(){
        this.validateForm = this.fb.group({
          amount: [null, Validators.required],
          month: [null, Validators.required],
          givenBy:[null, Validators.required],
          description:[null, Validators.required],
        })
    }

    payFee(){
      console.log(this.validateForm.value);
      this.service.payFee(this.studentId, this.validateForm.value).subscribe((res)=>{
        if(res.id!=null){
          this.snackbar.open("Fee paid successfully","Close",{duration: 5000});
        }else{
          this.snackbar.open("Something went wrong.","Close",{duration: 5000});
        }
      })
    }

}
