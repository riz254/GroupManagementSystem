import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroupsService } from '../groups.service';

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
    const newGroup = new Group(
      form.controls['name'].value, // Now 'customer' is mapped to 'title' in customer model
      form.controls['refNumber'].value

      // new Date(form.controls['dueDate'].value) // Convert 'dueDate' string to Date object
    );

    this.customerService.addGroup(newGroup).subscribe((response) => {
      // Handle success
      alert('Group added successfully');
    });
    form.resetForm();
  }
}
