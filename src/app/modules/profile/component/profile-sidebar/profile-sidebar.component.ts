import { NotifyService } from 'src/app/shares/services/notify/notify.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent {
  @Input() user: any;
  constructor(private notifyService: NotifyService) { }

  copyLink() {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.notifyService.success('Copy link success', 'Success');
  }
}
