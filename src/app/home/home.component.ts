import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  goToAbout(){
    this.route.navigate(['./about'])
  }
}
