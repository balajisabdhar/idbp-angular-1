import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  userAction = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  logout() {
    localStorage.clear();
    this.authService.loggedIn = false;
    this.userAction = false;
    this.router.navigate(['/login']);
  }
}