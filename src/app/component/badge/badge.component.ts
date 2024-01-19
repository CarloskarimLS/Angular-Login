import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IAuthors } from './IAuthors';
import { IAuthorsByID } from './IAuthorsById';
import { ServiceAuthors } from './serviceAuthors.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf, FormsModule, MatCardModule, MatExpansionModule],
  templateUrl: "badge.component.html",
  providers: [ServiceAuthors]
})
export class BadgeComponent implements OnInit  {
  initialValue: IAuthors = {meta: {count: 0, db_response_time_ms: 0, page: 0, per_page: 0, groups_count: null}, results: [], group_by: []};

  panelOpenState = false;
  constructor(private serviceAuthors: ServiceAuthors) { }
  @Input() openAlexId: string = '';

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

  searchAuthor(){
    this.serviceAuthors.getAuthorById('A5040654425').subscribe(
      (data: any) =>{
        console.log(data);
      },
      (error) =>{
        console.log("Error", error);
      }
    )
  }

}
