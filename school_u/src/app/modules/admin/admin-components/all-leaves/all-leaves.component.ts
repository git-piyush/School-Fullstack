import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrl: './all-leaves.component.scss'
})
export class AllLeavesComponent {

  isSpinning = false;
  leaves: any;

  constructor(
    private snackbar: MatSnackBar,
    private service : AdminService
  ){}

  ngOnInit(){
    this.getAllLeaves();
  }

  getAllLeaves(){
    this.isSpinning = true;
    this.service.getAllLeaves().subscribe((res) => {
      console.log(res);
      this.isSpinning = false;
      this.leaves = res;
    })
  }

  changeLeaveStatus(leaveId: number, status: string){
    this.isSpinning = true;
    this.service.changeLeaveStatus(leaveId, status).subscribe((res)=>{
      console.log(res);
      this.isSpinning = false;
      if(res.id!=null){
        this.snackbar.open('Leave approved successfully', 'Success',{
          duration: 5000
        });
        this.getAllLeaves();
      }else{
        this.snackbar.open("Something went wrong", 'Error',{
          duration: 5000
        });
      }
    });
  }


  }

