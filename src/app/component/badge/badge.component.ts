import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IAuthors } from './IAuthors';
import { ServiceAuthors } from './serviceAuthors.component';
@Component({
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf, FormsModule],
  templateUrl: "badge.component.html",
  providers: [ServiceAuthors]
})
export class BadgeComponent implements OnInit  {
  initialValue: IAuthors = {meta: {count: 0, db_response_time_ms: 0, page: 0, per_page: 0, groups_count: null}, results: [], group_by: []};
  constructor(private serviceAuthors: ServiceAuthors) { }

  ngOnInit(): void {
    this.serviceAuthors.getData().subscribe(
      (data: IAuthors) => {
        this.initialValue = data;
      },
      (error) =>{
        console.log("Error", error);
      }
    );
  }

}
