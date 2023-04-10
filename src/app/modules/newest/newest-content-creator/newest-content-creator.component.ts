import { TopicService } from './../../../shares/services/topic/topic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest-content-creator',
  templateUrl: './newest-content-creator.component.html',
  styleUrls: ['./newest-content-creator.component.scss']
})
export class NewestContentCreatorComponent implements OnInit{
  topics: any;
  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.listenService();
  }

  listenService() {
    this.topicService.getTopic(1, 20).subscribe((res: any) => {
      if (res.items) {
        this.topics = res.items;
        console.log('this.topics', this.topics);
      }
    });
  }
  
}
