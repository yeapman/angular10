import { Component } from '@angular/core';

export interface PostInterface {
  title: string
  text: string
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: PostInterface[] = [
    {title: 'Want learn angular components', text: 'still learn components', id: 1},
    {title: ' LALA', text: 'lll', id: 2}
  ];

  title = 'ChooseOne';
}
