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
  initialValueById: IAuthorsByID = {id: '', orcid: null, display_name: '', display_name_alternatives: [], works_count: 0, cited_by_count: 0, summary_stats: { "2yr_mean_citedness": 0, h_index: 0, i10_index: 0}, ids: {openalex: ''}, affiliations: [], last_known_institution: {id: '', ror: '', display_name: '', country_code: '', type: '', lineage: []}, last_known_institutions: [], x_concepts: [], counts_by_year: [], works_api_url: '', updated_date: new Date(), created_date: new Date()};

  panelOpenState = false;
  searchById = false;
  errorInSearch = false;
  constructor(private serviceAuthors: ServiceAuthors) { }
  @Input() openAlexId: string = '';

  ngOnInit(): void {
    this.serviceAuthors.getData().subscribe(
      (data: IAuthors) => {
        this.initialValue = data;
        console.log(this.initialValue);
      },
      (error) =>{
        console.log("Error", error);
      }
    );
  }

  searchAuthor(){
    this.serviceAuthors.getAuthorById(this.openAlexId).subscribe(
      (data: IAuthorsByID) =>{
        this.initialValueById = data;
        this.searchById = true;
        console.log(this.initialValueById);
      },
      (error) =>{
        this.errorInSearch = true;
        this.searchById = false;
      }
    )
  }

}
