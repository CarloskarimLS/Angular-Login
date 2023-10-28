import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApisComponent } from './apis.component';

@NgModule({
    declarations: [ApisComponent],
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule
    ],
    exports: [ApisComponent]
  })
  export class ApiModule { }