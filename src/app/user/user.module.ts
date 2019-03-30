import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [AdduserComponent]
})
export class UserModule { }
