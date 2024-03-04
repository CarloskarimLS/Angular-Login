import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { IOnlyWorks } from './IOnlyWorks';
import { MySearchService } from './searchService.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { IAuthors } from '../badge/IAuthors';

/** @title Disabled select */
@Component({
  selector: 'select-disabled-example',
  templateUrl: 'search.component.html',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule,
    MatOptionModule,
  ],
  providers: [MySearchService]
})
export class SearchFilterComponent implements OnInit{
  myControl = new FormControl('');
  disableSelect = new FormControl(false);
  initialValue: IOnlyWorks = {meta: {count: 0, db_response_time_ms: 0, page: 0, per_page: 0, groups_count: null}, results: [], group_by: []};
  authors: IAuthors = {meta: {count: 0, db_response_time_ms: 0, page: 0, per_page: 0, groups_count: null}, results: [], group_by: []};
  constructor(private myService: MySearchService) { }

  ngOnInit(): void {
    this.myService.getData().subscribe(
      (data: IOnlyWorks) => {
        this.initialValue = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.myService.getAuthors().subscribe(
      (data: IAuthors) => {
        this.authors = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
