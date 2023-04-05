import { AuthService } from './../services/auth/auth.service';
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
import {MatButtonModule} from '@angular/material/button';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { CommentsComponent } from './comments/comments.component';
import { MyCkEditorModule } from '../ckeditor/my-ck-editor/my-ck-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

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
    SidebarAskComponent,
    ConfirmModalComponent,
    CommentsComponent,
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    HighlightJsModule,
    PopoverModule,
    MatButtonModule,
    MyCkEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    MenuComponent,
    CardItemComponent,
    SafeHtmlPipe,
    PostsItemComponent,
    SidebarAskComponent,
    CommentsComponent
  ],
  providers: [
    HighlightJsDirective,
    AuthService
  ]
})
export class ShareUiModule { }
