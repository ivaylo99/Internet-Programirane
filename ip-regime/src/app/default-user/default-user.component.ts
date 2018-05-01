import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.css']
})
export class DefaultUserComponent implements OnInit {

  private username;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.route.params['values']['username']
  }

}
