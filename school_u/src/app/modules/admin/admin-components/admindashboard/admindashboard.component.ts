import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent {

  constructor(private service: AdminService){}

  ctx : any;
  config: any;
  chartData: number[] = [];
  chartDatalabels : any[] = [];

  ctx1 : any;
  config1: any;
  chartData1: number[] = [];
  chartDatalabels1 : any[] = [];

  ngOnInit(){
    this.getChartData1();
    this.getChartData2();
  }

  getChartData1(){
    this.service.getChartData().subscribe((res)=>{
      console.log(res);
      this.chartData.push(res.noOfStudents);
      this.chartData.push(res.noOfTeachers);
  
      this.chartDatalabels.push('Students');
      this.chartDatalabels.push('Teachers');
  
      this.ctx = document.getElementById('myChart');
      this.config = {
        type: 'pie',
        options:{
        },
        data:{
          labels: this.chartDatalabels,
          datasets:[{
            label: 'Chart Data',
            data: this.chartData,
          }],
        }
      }
      const myChart = new Chart(this.ctx, this.config);
    })

  }

  getChartData2(){
    this.service.getChartData2().subscribe((res)=>{
      console.log(res);
      this.chartData1.push(res.approvedLeaves);
      this.chartData1.push(res.disApprovedLeaves);
      this.chartData1.push(res.pendingLeaves);
  
      this.chartDatalabels1.push('Approved Leaves');
      this.chartDatalabels1.push('Disapproved Leaves');
      this.chartDatalabels1.push('Pending Leaves');
  
      this.ctx1 = document.getElementById('myChart1');
      this.config1 = {
        type: 'pie',
        options:{
        },
        data:{
          labels: this.chartDatalabels,
          datasets:[{
            label: 'Chart Data',
            data: this.chartData1,
          }],
        }
      }
      const myChart1 = new Chart(this.ctx1, this.config1);
    })
  }

}
