import { User } from './user';

export class Comment {
  data: number;
  constructor(public user: User, public message: string) {
    this.data = Date.now();
  }
}
