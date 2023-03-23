import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ShareUiModule } from './shares/share-ui/share-ui.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { HighlightJsModule } from 'ngx-highlight-js';
import { PopoverModule } from 'ngx-smart-popover';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareUiModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CKEditorModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    NgxLinkifyjsModule.forRoot(),
    HighlightJsModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
