import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  // memberArray: any[] = [];
  memberArray: Member[] = []; // member array to hold members fetched from the backend

  constructor(private memberService: GroupsService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((members) => {
      this.memberArray = members;
    });
  }
}
