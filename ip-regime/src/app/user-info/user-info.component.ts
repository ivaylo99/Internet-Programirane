import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService, UserInfo } from '../services/register.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [UserInfoService]
})
export class UserInfoComponent implements OnInit {

  private username;
  private age;
  private gender;
  private weight;
  private height;
  private goal;
  private activity;
  private meals;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.route.params['value']['username']
  }

  submitUserInfo() {
    //send user info to the backend /user/:id/measurements
    this.redirect(this.username)
  }

  redirect(username) {
    this.router.navigate(['status', username])
  }
}
