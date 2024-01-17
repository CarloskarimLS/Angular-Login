import { Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { MyService } from './service.component';
import { IWorks } from './IWorks';
import { count } from 'rxjs';
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

  constructor(private myService: MyService) {
    
  }
  // ngOnInit(): void{

  //   this.myService.getData().subscribe((data) => {
  //     // const initialValue: IWorks = data;
  //     // this.initialValue = data;
  //     //   console.log(data);
  //     //   console.log(this.initialValue);
  //     //   console.log("initial value: " + initialValue);
  //     //   console.log(initialValue.meta.count);
  //     //   console.log(JSON.stringify(this.initialValue));
  //     this.initialValue = data;
  //     console.log(data);
  //     console.log(JSON.stringify(this.initialValue));
  //   });
  // }
  ngOnInit(): void {
    this.myService.getData().subscribe(
      (data: any) => {
        this.initialValue = data;
        console.log('Datos asignados:', this.initialValue);
        const c = {initialValue: []}
        console.log(c.initialValue)
        console.log(c.initialValue[0])
        console.log(data)
        
        if(!data){
          return data;
        }
        if(!data.meta) return data;

        if(!data.meta.count) return data;
        
        let meta: IWorks = {
          ...data.meta.count,
          count:
            ( data.meta.count &&
              data.meta.count[0]
            )
            ? data.meta.count[0] : '' 
        }

        //https://stackoverflow.com/questions/69107755/angular-error-typeerror-cannot-read-properties-of-undefined-reading-licence
        data.meta.count = meta;

        console.log(meta)
        console.log(data)
        
        console.log(data.meta.count)
        
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
