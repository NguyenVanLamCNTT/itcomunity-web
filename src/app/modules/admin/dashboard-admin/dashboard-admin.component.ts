import { filter } from 'rxjs/operators';
import { TopicService } from './../../../shares/services/topic/topic.service';
import { UserService } from './../../../shares/services/user/user.service';
import { SeriesService } from './../../../shares/services/series/series.service';
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
import * as ApexCharts from 'apexcharts';
import { QuestionAnswerService } from 'src/app/shares/services/question-answers/question-answer.service';

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
  dataByMonthSeries: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  dataByMonthQuestion: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  dataByMonthUser: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  dataByMonthTopic: any[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  totalPosts = 0;
  totalSeries = 0;
  totalQuestions = 0;
  totalUsers = 0;
  totalTopics = 0;
  totalUsersInDay = 0;
  totalPostsInDay = 0;
  totalSeriesInDay = 0;
  totalQuestionsInDay = 0;
  totalTopicsInDay = 0;

  series: any[] = [];

  constructor(private postsService: PostsService, 
              private seriesService: SeriesService,
              private questionAnswerService: QuestionAnswerService,
              private userService: UserService,
              private topicService: TopicService) {
    this.chartOptions = {
      series: [
        {
          name: "Posts",
          data: this.dataByMonth,
        },
        {
          name: "Series",
          data: this.dataByMonthSeries,
        },
        {
          name: "Questions",
          data: this.dataByMonthQuestion,
        },
        {
          name: "Topics",
          data: this.dataByMonthTopic,
        }
      ],
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
        text: "Get Posts, Series, Questions, Topics by month",
        offsetY: 305,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }



  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   this.listenService();
    // }, 1000);
  }
  
  listenService() {
    this.postsService.getPosts(1, 100).subscribe((res: any) => {
      const posts = res.items;
      this.totalPosts = res.totalItems;
      const total = res.totalItems;
      this.totalPostsInDay = posts?.filter((post: any) => {
        const date = new Date(post.created);
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      }).length;
      posts.map((post: any) => {
        this.getPostsByCreateByMonth(post)
      });
      this.dataByMonth = this.dataByMonth.map((data: any) => Number((parseInt(data)/parseInt(total) * 100).toFixed(0)));
      this.chartOptions.series[0].data = this.dataByMonth;
      const chart = new ApexCharts(this.chart, this.chartOptions);
      // chart.render();
    });

    this.seriesService.getSeries(1, 100).subscribe((res: any) => {
      const series = res.items;
      const total = res.totalItems;
      this.totalSeries = res.totalItems;
      series.map((serie: any) => {
        this.getSeriesByCreateByMonth(serie)
      });
      this.totalSeriesInDay = series?.filter((series1: any) => {
        const date = new Date(series1.created);
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      }).length;

      this.dataByMonthSeries = this.dataByMonthSeries.map((data: any) => Number((parseInt(data)/parseInt(total) * 100).toFixed(0)));
      this.chartOptions.series[1].data = this.dataByMonthSeries;
      const chart = new ApexCharts(this.chart, this.chartOptions);
      // chart.render();
    });

    this.questionAnswerService.getQuestion(1, 100).subscribe((res: any) => {
      const questionAnswers = res.items;
      const total = res.totalItems;
      this.totalQuestions = res.totalItems;
      questionAnswers.map((questionAnswer: any) => {
        this.getQuestionAnswerByCreateByMonth(questionAnswer)
      });
      this.totalQuestionsInDay = questionAnswers?.filter((series1: any) => {
        const date = new Date(series1.created);
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      }).length;

      this.dataByMonthQuestion = this.dataByMonthQuestion.map((data: any) => Number((parseInt(data)/parseInt(total) * 100).toFixed(0)));
      this.chartOptions.series[2].data = this.dataByMonthQuestion;
      const chart = new ApexCharts(this.chart, this.chartOptions);
      // chart.render();
    });

    this.userService.getAllUsersAdmin(1, 100).subscribe((res: any) => {
      const users = res;
      const total = res.length;
      this.totalUsers = total;
      users.map((user: any) => {
        this.getUserByCreateByMonth(user)
      });
      this.totalUsersInDay = users?.filter((user: any) => {
        const date = new Date(user.created);
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      }).length;
      this.dataByMonthUser = this.dataByMonthUser.map((data: any) => Number((parseInt(data)/parseInt(total) * 100).toFixed(0)));
      // this.chartOptions.series[3].data = this.dataByMonthUser;
      // this.chart
      const chart = new ApexCharts(this.chart, this.chartOptions);
      // chart.render();
    });

    this.topicService.getTopic(1, 100).subscribe((res: any) => {
      const topics = res.items;
      const total = res.totalItems;
      this.totalTopics = res.totalItems;
      topics.map((topic: any) => {
        this.getTopicByCreateByMonth(topic)
      });

      this.totalTopicsInDay = topics?.filter((topic: any) => {
        const date = new Date(topic.created);
        const today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      }).length;
      this.dataByMonthTopic = this.dataByMonthTopic.map((data: any) => Number((parseInt(data)/parseInt(total) * 100).toFixed(0)));
      this.chartOptions.series[3].data = this.dataByMonthTopic;
      const chart = new ApexCharts(this.chart, this.chartOptions);
      // chart.render();
    });
  }

  // get posts by create by month
  getPostsByCreateByMonth(posts: any) {
    const date = new Date(posts.created);
    const month = date.getMonth();
    this.dataByMonth[month] = this.dataByMonth[month] + 1;
    return this.dataByMonth;
  }

  // get series by create by month
  getSeriesByCreateByMonth(series: any) {
    const date = new Date(series.created);
    const month = date.getMonth();
    this.dataByMonthSeries[month] = this.dataByMonthSeries[month] + 1;
    return this.dataByMonthSeries;
  }

  // get question answer by create by month
  getQuestionAnswerByCreateByMonth(questionAnswer: any) {
    const date = new Date(questionAnswer.created);
    const month = date.getMonth();
    this.dataByMonthQuestion[month] = this.dataByMonthQuestion[month] + 1;
    return this.dataByMonthQuestion;
  }

  // get user by create by month
  getUserByCreateByMonth(user: any) {
    const date = new Date(user.created);
    const month = date.getMonth();
    this.dataByMonthUser[month] = this.dataByMonthUser[month] + 1;
    return this.dataByMonthUser;
  }

  // get topic by create by month
  getTopicByCreateByMonth(topic: any) {
    const date = new Date(topic.created);
    const month = date.getMonth();
    this.dataByMonthTopic[month] = this.dataByMonthTopic[month] + 1;
    return this.dataByMonthTopic;
  }

  ngOnInit(): void {
    this.listenService();
  }
}
