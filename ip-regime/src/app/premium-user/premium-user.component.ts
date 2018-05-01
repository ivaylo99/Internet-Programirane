import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-premium-user',
  templateUrl: './premium-user.component.html',
  styleUrls: ['./premium-user.component.css']
})
export class PremiumUserComponent implements OnInit {

  private carbs_first;
  private carbs_second;
  private carbs_third;
  private protein_first;
  private protein_second;
  private protein_third;
  private fats_first;
  private fats_second;
  private fats_third;
  private username;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.route.params['value']['username'];
  }

  submitPlan() {
    //send propetis values to an endpoint
    //send to some user home page
    console.log("currently does nothing, but imagine it worked ;)")
  }

  redirect(where, username) {
    this.router.navigate(where, username);
  }
}
