import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../groups.service';
import { Member } from '../member.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent {
  groupId!: number; // Declare groupId
  memberId!: number; // Declare memberId
  member!: Member;

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService
  ) {}

  ngOnInit() {
    // Get both groupId and memberId from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.groupId = +params.get('groupId')!; // Get groupId from route
      this.memberId = +params.get('memberId')!; // Get memberId from route
      this.getMember();
    });
  }

  // Get the member data using the memberId
  getMember() {
    this.groupsService
      .getMembersByGroupId(this.groupId)
      .subscribe((members) => {
        this.member = members.find((m) => m.id === this.memberId)!;
      });
  }

  // Update member savings
  onUpdateSavings(form: NgForm) {
    if (this.member) {
      this.groupsService
        .updateMemberSavings(this.memberId, form.value.savings)
        .subscribe((updatedMember) => {
          alert(`Updated savings for ${updatedMember?.firstname}`);
        });
    }
  }
}
