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

  LEAVESTATUS: string[] = ["Male", "Female", "Not Specified"];

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

  leaveFilter(status: string){
    this.isSpinning = true;
    this.service.filterLeaves(status).subscribe((res)=>{
      console.log(res);
      this.isSpinning = false;
      this.leaves = res;
    }, error=>{
      if(error.status==404)
      this.leaves = null;
      this.snackbar.open("No Record Found.", 'Error',{
        duration: 5000
      });
    });
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

