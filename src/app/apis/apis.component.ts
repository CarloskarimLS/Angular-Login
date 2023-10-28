import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApi } from './apisjson.component';

@Component({
    selector: 'app-apis',
    templateUrl: './apis.component.html',
    styleUrls: ['./apis.component.css'],
    providers: [MyApi]
})
export class ApisComponent implements OnInit {
    tasks: any[] = []; 

    constructor(private myApi: MyApi, private router: Router) {}

    ngOnInit(): void{
        debugger;
        this.myApi.getWorks().subscribe((data) => {
          this.tasks = data;
        });
    }

    goDashboard(): void{
        this.router.navigate(['/dashboard']);
      }
    
}