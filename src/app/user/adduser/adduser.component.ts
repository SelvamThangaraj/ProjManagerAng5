import { Component, OnInit } from '@angular/core';
import {Usermodel} from '../usermodel';
import {UserserviceService} from '../userservice.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
 user:Usermodel;
 id: String;
 addedUser:Usermodel;
 userList: Usermodel[];

  constructor(private userService:UserserviceService) { }

  ngOnInit() {
    this.user=new Usermodel();
  }

  save(): void {
    console.log("submit button clicked" + this.user.firstName);

    this.userService.saveUser(this.user).subscribe(response => this.addedUser=response );
    //console.log("this.id=>" + this.addedUser.employeeId);
  }

  list(): void {
    this.userService.listUser()
      .subscribe(userList => {
        console.log("userList=>"+userList);
        this.userList = userList
      });

    if (undefined != this.userList) {
      console.log("Employee list=>" + this.userList);

      // if (this.userList.length > 0) {
      //   this.isEmpAvail = true;
      // }

      // console.log("isEmpAvail" + this.isEmpAvail);
    }
  }

}