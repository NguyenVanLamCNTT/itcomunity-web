import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PostsManagerComponent } from './posts-manager/posts-manager.component';
import { SeriesManagerComponent } from './series-manager/series-manager.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { QuestionsManagerComponent } from './questions-manager/questions-manager.component';
import { TopicsManagerComponent } from './topics-manager/topics-manager.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardAdminComponent
      },
      {
        path: 'posts-manager',
        component: PostsManagerComponent
      },
      {
        path: 'series-manager',
        component: SeriesManagerComponent
      },
      {
        path: 'users-manager',
        component: UsersManagerComponent
      },
      {
        path: 'questions-manager',
        component: QuestionsManagerComponent
      },
      {
        path: 'topic-manager',
        component: TopicsManagerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
