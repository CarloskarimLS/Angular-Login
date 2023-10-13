import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout(): void {
    debugger;
    // Realiza el cierre de sesión (simplemente redirige al usuario al inicio de sesión)
    this.router.navigate(['/login']);
  }

}
