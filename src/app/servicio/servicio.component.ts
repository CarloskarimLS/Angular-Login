import { Component, OnInit } from '@angular/core';
import { MyService } from './serviciojson.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css'],
  providers: [MyService]
})
export class ServiceComponent implements OnInit {
  tasks: any[] = []; 

  constructor(private myService: MyService, private router: Router) {}

  ngOnInit(): void{
    debugger;
    this.myService.getData().subscribe((data) => {
      this.tasks = data;
    });
  }

  goDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

}
