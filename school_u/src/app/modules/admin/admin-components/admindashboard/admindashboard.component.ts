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

  ngOnInit(){
    this.getChartData();
  }

  getChartData(){
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

}
