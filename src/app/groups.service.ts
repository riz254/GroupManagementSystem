import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from './group.model';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private apiUrl = 'assets/groups.json'; // Static JSON file for now

  constructor(private http: HttpClient) {}

  /*** Group Methods ***/

  // Get all groups
  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl);
  }

  // Get a specific group by ID
  // getGroupById(id: number): Observable<Group | undefined> {
  //   return this.http.get<Group>(`${this.apiUrl}/${id}`);
  // }

  // Get a specific group by ID from the static JSON file
  getGroupById(id: number): Observable<Group | undefined> {
    return this.getGroups().pipe(
      map((groups) => groups.find((group) => group.id === id))
    );
  }

  // Add a new group
  addGroup(group: Group): Observable<Group> {
    console.log('Adding group:', group);
    return this.http.post<Group>(this.apiUrl, group);
  }

  /*** Member Methods ***/

  // Get all members across all groups
  getMembers(): Observable<Member[]> {
    return this.getGroups().pipe(
      map((groups) => groups.flatMap((group) => group.members))
    );
  }

  // Get a specific member by ID
  getMemberById(id: number): Observable<Member | undefined> {
    return this.getMembers().pipe(
      map((members) => members.find((member) => member.id === id))
    );
  }

  // Get members of a specific group by Group ID
  // getMembersByGroupId(groupId: number): Observable<Member[]> {
  //   return this.http.get<Member[]>(`${this.apiUrl}/${groupId}/members`);
  // }

  // Get members by group ID
  getMembersByGroupId(groupId: number): Observable<Member[]> {
    return this.getGroupById(groupId).pipe(
      map((group) => (group ? group.members : []))
    );
  }

  // Add a new member to a specific group
  addMember(groupId: number, member: Member): Observable<Member> {
    console.log(`Adding member to group ${groupId}:`, member);
    return this.http.post<Member>(`${this.apiUrl}/${groupId}/members`, member);
  }

  // // Update a member's savings
  // updateMemberSavings(
  //   groupId: number,
  //   memberId: number,
  //   savings: number
  // ): Observable<Member> {
  //   return this.http.put<Member>(
  //     `${this.apiUrl}/${groupId}/members/${memberId}`,
  //     { savings }
  //   );
  // }

  // Update a member's savings
  updateMemberSavings(
    memberId: number,
    newSavings: number
  ): Observable<Member | undefined> {
    return this.getMembers().pipe(
      map((members) => {
        const member = members.find((m) => m.id === memberId);
        if (member) {
          member.savings = newSavings;
          console.log(`Updated savings for ${member.firstname}:`, newSavings);
        }
        return member;
      })
    );
  }

  // Remove a member from a group
  removeMember(groupId: number, memberId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${groupId}/members/${memberId}`
    );
  }
}
