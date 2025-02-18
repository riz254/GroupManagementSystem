import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { MembersComponent } from './members/members.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { NewMemberComponent } from './new-member/new-member.component';

const routes: Routes = [
  { path: '', redirectTo: '/groups', pathMatch: 'full' },
  { path: 'groups', component: GroupComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id/newMember', component: NewMemberComponent }, // Route for the task detail view
  { path: 'New', component: NewGroupComponent }, // Route for the task detail view
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
