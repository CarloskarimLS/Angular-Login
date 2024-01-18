import { Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { MyService } from './service.component';
import { IWorks } from './IWorks';
@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf],
  templateUrl: 'alert.component.html',
  styles: [
    `
      .alert-custom {
        color: #cc4dd5;
        background-color: #f0c4f3;
        border-color: #f0c4f3;
      }
    `,
  ],
  providers: [MyService]
})
export class NgbdAlertBasicComponent implements OnInit  {
  initialValue: IWorks = {meta: {count: 0, db_response_time_ms: 0, page: 0, per_page: 0, groups_count: null}, results: [], group_by: []}; 
  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.myService.getData().subscribe(
      (data: IWorks) => {
        this.initialValue = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  
}
