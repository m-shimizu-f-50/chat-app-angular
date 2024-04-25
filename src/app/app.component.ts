import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '武井 検事', message: 'お疲れ様です。' },
  { name: '武井 検事', message: 'この間の件はどうなりましたか？' },
  { name: '清水 検事', message: 'お疲れ様です。' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
}
