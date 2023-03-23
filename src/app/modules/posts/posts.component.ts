import { Component, OnInit } from '@angular/core';
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}