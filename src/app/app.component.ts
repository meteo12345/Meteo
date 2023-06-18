import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.navbarClass='navbar-transparent'
  }
  // title = 'main';
  // constructor(private router:Router){

  // }
  // goToAboutUs() {
  //   this.router.navigate(['/', 'about-us']);
  // }
  // goToOurServices() {
  //   this.router.navigate(['/', 'our-services']);
  // }
  // goToContactUs() {
  //   this.router.navigate(['/', 'contact-us']);
  // }
  navbarClass = ' ';
}
