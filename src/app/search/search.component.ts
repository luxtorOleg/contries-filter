import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {

    // add corresponding validators
    this.searchForm = this.fb.group({
      searchCountry: ['', [Validators.required]]
    });

    // write a function that calls changeCountryName upon value change in the form
    this.searchForm.valueChanges.subscribe( value => this.service.changeCountryName(value.searchCountry));
  }


}
