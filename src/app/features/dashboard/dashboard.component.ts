import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  bool:boolean = false;

  ngOnInit(): void {}

  logout() {
    this.bool = false;
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
}