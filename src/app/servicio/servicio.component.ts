import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServiceComponent {

  constructor(private http: HttpClient) {}

  consultarServicio(): void {
    this.http.get('https://ejemplo.com/api/data').subscribe((data: any) => {
      // Aquí puedes manejar la respuesta del servicio
      console.log(data);
    });
  }
}
