import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  private username;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.route.params['value']['username']
  }

  defaultUser() {
    this.redirect('regular', this.username)
  }

  premiumUser() {
    this.redirect('premium', this.username)
  }

  redirect(where, param) {
    this.router.navigate([where, param])
  }
}
