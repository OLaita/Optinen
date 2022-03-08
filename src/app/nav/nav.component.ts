import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dash:DashboardComponent) { }

  logOut(){
    this.dash.logout();
  }

  ngOnInit(): void {
  }
  

}
