import { HighlightJsModule, HighlightJsDirective } from 'ngx-highlight-js';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './language/language.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CardItemComponent } from './card-item/card-item.component';
import { SafeHtmlPipe } from '../pipes/safeHtml.pipe';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { SidebarAskComponent } from 'src/app/shares/share-ui/sidebar-ask/sidebar-ask.component';
import { PopoverModule } from 'ngx-smart-popover';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    LanguageComponent,
    MenuComponent,
    CardItemComponent,
    SafeHtmlPipe,
    PostsItemComponent,
    SidebarAskComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    HighlightJsModule,
    PopoverModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    MenuComponent,
    CardItemComponent,
    SafeHtmlPipe,
    PostsItemComponent,
    SidebarAskComponent
  ],
  providers: [
    HighlightJsDirective
  ]
})
export class ShareUiModule { }
