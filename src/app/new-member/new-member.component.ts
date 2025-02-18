import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent {
  // getting the customer array from customer service
  constructor(private memberService: GroupsService) {}

  // Submit the form to create a new customer
  onSubmit(form: NgForm) {
    const newMember = new Member(
      form.controls['firstname'].value, // Now 'customer' is mapped to 'title' in customer model
      form.controls['lastname'].value,
      form.controls['nationalid'].value,
      form.controls['phonenumber'].value

      // new Date(form.controls['dueDate'].value) // Convert 'dueDate' string to Date object
    );

    this.memberService.addMember(newMember).subscribe((response) => {
      // Handle success
      alert('member added successfully');
    });
    form.resetForm();
  }
}
