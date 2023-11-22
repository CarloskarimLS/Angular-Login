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
    
    //I nedd to add a interface, then parse the json request
    constructor(private myApi: MyApi, private router: Router) {}
    
    ngOnInit(): void{
      this.myApi.getWorks().subscribe((data) =>{
        this.works = data;
        console.log(data);
      });
    }

    goDashboard(): void{
        this.router.navigate(['/dashboard']);
      }
    
}