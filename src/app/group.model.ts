import { Member } from './member.model';

export interface Group {
  id?: number;
  name: string;
  refNumber: string;
  members: Member[]; // Array of Member objects
}
