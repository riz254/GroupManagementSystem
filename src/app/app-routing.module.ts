import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { MembersComponent } from './members/members.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/groups', pathMatch: 'full' },
  { path: 'groups', component: GroupComponent },
  { path: 'groups/:groupId/members', component: MembersComponent },
  { path: 'groups/:groupId/newMember', component: NewMemberComponent }, // Route for the task detail view
  { path: 'New', component: NewGroupComponent }, // Route for the task detail view
  {
    path: 'groups/:groupId/members/:memberId',
    component: MemberDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
