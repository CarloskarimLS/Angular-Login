import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  iniciarSesion(): void {
    debugger;
    if (this.usuario === 'usr' && this.contrasena === '123') {
      debugger;
      
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/dashboard']);
    } else {
      debugger;
      this.mensajeError = 'Credenciales incorrectas';
    }
  }
}
