import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITCommunity-new';

  ngOnInit() {
    // redirect https
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      window.location.href = location.href.replace('http', 'https');
    }
  }
}
