import { LoadingServiceService } from './shares/services/loading/loading-service.service';
import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'ITCommunity-new';
  isLoading: boolean = false;
  constructor(private loadingServiceService: LoadingServiceService) {}
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingServiceService.isLoading$.subscribe((status: boolean) => {
        this.isLoading = status;
      });
    }, 100);
  }

  ngOnInit() {
    // redirect https
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      window.location.href = location.href.replace('http', 'https');
    }
  }
}
