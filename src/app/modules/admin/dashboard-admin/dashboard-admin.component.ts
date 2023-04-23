import { PostsService } from 'src/app/shares/services/posts/posts.service';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit, OnChanges{
  @ViewChild("chart") chart!: any;
  public chartOptions!: any;
  dataByMonth: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  series: any[] = [];

  constructor(private postsService: PostsService) {
    this.chartOptions = {
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val:any) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  
  listenService() {
    this.postsService.getPosts(1, 1000).subscribe((res: any) => {
      const posts = res.items;
      console.log('posts', posts);
      posts.map((post: any) => {
        this.getPostsByCreateByMonth(post)
      });
      const data = {
        name: "Posts",
        data: this.dataByMonth
      }
      this.series.push(data);
      console.log('data', this.series);
    });
    
  }

  // get posts by create by month
  getPostsByCreateByMonth(posts: any) {
    const date = new Date(posts.created);
    const month = date.getMonth();
    this.dataByMonth[month] = this.dataByMonth[month] + 1;
    return this.dataByMonth;
  }

  ngOnInit(): void {
    this.listenService();
  }
}
