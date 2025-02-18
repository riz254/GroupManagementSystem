import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent {
  // groupArray: any[] = [];
  groupArray: Group[] = []; // group array to hold groups fetched from the backend

  constructor(private groupService: GroupsService) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((groups) => {
      this.groupArray = groups;
    });
  }
}
