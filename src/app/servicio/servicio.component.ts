import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './tu-componente.component.html',
  styleUrls: ['./tu-componente.component.css']
})
export class TuComponenteComponent {

  constructor(private http: HttpClient) {}

  consultarServicio(): void {
    this.http.get('https://ejemplo.com/api/data').subscribe((data: any) => {
      // Aquí puedes manejar la respuesta del servicio
      console.log(data);
    });
  }
}
