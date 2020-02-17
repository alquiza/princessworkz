import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year = 2020;
  owner = 'IbeAGiant';
  notice = 'All right reserved.';
  company = 'Enterprise';
  
  constructor() { }

  ngOnInit(): void {
  }

}
