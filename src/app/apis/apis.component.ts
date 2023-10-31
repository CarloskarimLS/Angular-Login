import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApi } from './apisjson.component';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-apis',
    templateUrl: './apis.component.html',
    styleUrls: ['./apis.component.css'],
    providers: [MyApi]
})
export class ApisComponent implements OnInit {
    works: any[] = []; 

    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit(): void{
        debugger;
        this.http.get<any[]>('https://api.openalex.org/works?sample=20').subscribe(
        (response) => {
          this.works = response;
          console.log(this.works);
          const itemToFind = "id"; // Reemplaza con el título que deseas buscar
          const foundItem = this.works.find(item => item.title === itemToFind);

          if (foundItem) {
            console.log("Se encontró el elemento:", foundItem);
          } else {
            console.log("No se encontró ningún elemento con el título especificado.");
          }
        },
        (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
    }

    goDashboard(): void{
        this.router.navigate(['/dashboard']);
      }
    
}