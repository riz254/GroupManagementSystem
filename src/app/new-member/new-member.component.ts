import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroupsService } from '../groups.service';
import { Group } from '../group.model';
import { Member } from '../member.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent {
  // getting the customer array from customer service
  constructor(
    private memberService: GroupsService,
    private route: ActivatedRoute
  ) {}

  groupId!: number;

  ngOnInit() {
    // Get the group ID from the URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.groupId = +id;
      }
    });
  }

  // Submit the form to create a new customer
  onSubmit(form: NgForm) {
    const newMember: Member = {
      firstname: form.controls['firstname'].value,
      lastname: form.controls['lastname'].value,
      nationalid: form.controls['nationalid'].value,
      phonenumber: form.controls['phonenumber'].value,
      savings: 0, // Default savings value
    };

    this.memberService
      .addMember(this.groupId, newMember)
      .subscribe((response) => {
        // Handle success
        alert('member added successfully');
      });
    form.resetForm();
  }
}
