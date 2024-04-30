import { User } from './user';

export class Comment {
  user: User;
  message: string;
  data: number;
  key?: string;
  isEdit: boolean;

  constructor(value: any) {
    this.user = value.user;
    this.message = value.message;
    this.data = value.data || Date.now();
    if (value.key) {
      this.key = value.key;
    }
  }
}
