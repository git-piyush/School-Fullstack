import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  teachers : any[] = [];

  constructor(private service: HomeService){}

  ctx : any;
  config: any;
  chartData: number[] = [];
  chartDatalabels : any[] = [];

  ngOnInit(){
    this.getAllTeachers();
    this.getChartData();
  }

  getAllTeachers(){
    this.service.getAllTeachers().subscribe((res)=>{
      console.log(res);
      this.teachers = res;
    })
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
