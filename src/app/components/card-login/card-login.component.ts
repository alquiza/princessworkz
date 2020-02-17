import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {

  cardTitle = 'Login';
  buttonName = 'Submit';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    return this.router.navigate(['']);
  }



}
