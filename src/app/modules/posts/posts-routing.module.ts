import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostsComponent } from './create-posts/create-posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreatePostsComponent
      },
      {
        path: ':id',
        component: PostsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
