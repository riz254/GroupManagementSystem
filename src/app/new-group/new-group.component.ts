import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroupsService } from '../groups.service';
import { Group } from '../group.model';
import { Member } from '../member.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css'],
})
export class NewGroupComponent {
  // getting the customer array from customer service
  constructor(private groupService: GroupsService) {}

  // Submit the form to create a new customer
  onSubmit(form: NgForm) {
    const newGroup: Group = {
      name: form.controls['name'].value,
      refNumber: form.controls['refNumber'].value,
      members: [],
    };

    this.groupService.addGroup(newGroup).subscribe((response) => {
      // Handle success
      alert('Group added successfully');
    });
    form.resetForm();
  }
}
