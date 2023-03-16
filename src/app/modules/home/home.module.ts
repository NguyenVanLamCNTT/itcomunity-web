import { ShareUiModule } from 'src/app/shares/share-ui/share-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarAskComponent } from './component/sidebar-ask/sidebar-ask.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarAskComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareUiModule
  ]
})
export class HomeModule { }
