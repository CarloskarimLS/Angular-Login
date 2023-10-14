import { Component} from '@angular/core';
import { Router } from '@angular/router';

//Hola
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout(): void {
    debugger;
    this.router.navigate(['/login']);
  }

  goServices(): void {
    debugger;
    this.router.navigate(['/service']);
  }

}
