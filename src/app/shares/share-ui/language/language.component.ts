import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit, OnDestroy{
  languages = ['en', 'vi'];
  languageChangeSubscription: any;
  lenguageSelected = 'vi';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.use('vi');
    this.languageChangeSubscription = this.translateService.onLangChange.subscribe(
      (event) => {
        console.log('Language has changed:', event.lang);
      }
    );
  }

  changeLanguage(language: any) {
    console.log('changeLanguage', language);
    const value = language.target.value;
    this.lenguageSelected = value;
    this.translateService.use(value);
  }

  ngOnDestroy() {
    this.languageChangeSubscription.unsubscribe();
  }
}
