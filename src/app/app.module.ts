import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GroupComponent } from './group/group.component';
import { MembersComponent } from './members/members.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GroupComponent,
    MembersComponent,
    NewGroupComponent,
    NewMemberComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
