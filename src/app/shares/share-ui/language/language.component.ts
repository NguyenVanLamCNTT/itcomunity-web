import { LocalStorageHelperService } from 'src/app/shares/services/token-storage/localstorage-helper.service';
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
  lenguageSelected = 'en';

  constructor(private translateService: TranslateService,
              private localStorageHelperService: LocalStorageHelperService) {}

  ngOnInit() {
    const language = this.localStorageHelperService.getLanguage();
    if (language) {
      this.translateService.use(language);
      this.lenguageSelected = language;
      const element = document.getElementById('language') as HTMLSelectElement;
      element.value = language;
    } else {
      this.translateService.use('en');
    }
    this.languageChangeSubscription = this.translateService.onLangChange.subscribe(
      (event) => {
      }
    );
  }

  changeLanguage(language: any) {
    const value = language.target.value;
    this.lenguageSelected = value;
    this.localStorageHelperService.saveLanguage(value);
    this.translateService.use(value);
  }

  ngOnDestroy() {
    this.languageChangeSubscription.unsubscribe();
  }
}
