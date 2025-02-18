import { Member } from './member.model';

export interface Group {
  id?: number;
  name: string;
  members: Member[]; // Array of Member objects
  created_at?: string;
  updated_at?: string;
}
