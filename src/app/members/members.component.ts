import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../groups.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent {
  memberArray: Member[] = []; // Array to hold members fetched from the backend
  groupId!: number;

  constructor(
    private route: ActivatedRoute,
    private memberService: GroupsService
  ) {}

  ngOnInit() {
    // Get the groupId from the route parameters
    this.route.paramMap.subscribe((params) => {
      const groupIdParam = params.get('groupId'); // Use 'groupId' as defined in your routes
      if (groupIdParam) {
        this.groupId = +groupIdParam;
        console.log(`Group id retrieved from route: ${this.groupId}`);
        this.getMembers();
      } else {
        console.error('No group id found in route parameters');
      }
    });
  }

  getMembers() {
    console.log(`Fetching members for group id: ${this.groupId}`);
    this.memberService.getMembersByGroupId(this.groupId).subscribe(
      (members) => {
        console.log('Members fetched:', members);
        this.memberArray = members;
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }
}
