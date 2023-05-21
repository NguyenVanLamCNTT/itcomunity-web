import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
  }

  sendEmail(): void {
    this.notifyService.success('Register notify successfully!', 'Success');
  }
}
