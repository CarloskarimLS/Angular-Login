import { Input, Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { MyService } from './service.component';
import { Router } from '@angular/router';
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
  initialValue: IWorks[] = []; 
  // this is for the Closeable Alert
  @Input() public alerts: Array<IAlert> = [];
  

  private backup: Array<IAlert>;
  constructor(private myService: MyService, private router: Router) {
    this.alerts.push(
      {
        id: 1,
        type: 'primary',
        message: 'This is a primary alert',
      },
      {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
      },
      {
        id: 3,
        type: 'success',
        message: 'This is an success alert',
      },
      {
        id: 4,
        type: 'warning',
        message: 'This is a warning alert',
      },
      {
        id: 5,
        type: 'danger',
        message: 'This is a danger alert',
      },
      {
        id: 6,
        type: 'secondary',
        message: 'This is an secondary alert',
      }
    );
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }
  ngOnInit(): void{

    this.myService.getData().subscribe((data) => {
      const initialValue: IWorks = data;
      this.initialValue = data;
        console.log(data);
        console.log(this.initialValue);
        console.log(initialValue.results);

    });
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
