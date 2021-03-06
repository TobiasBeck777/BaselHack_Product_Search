import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { SearchResult } from '../../app/models/searchResult';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input()
  resultList:SearchResult[];

    
  selectedResult?: SearchResult;

  constructor(private service: SearchService) {
    this.resultList = [];
   }

  ngOnInit(): void {

  }

  onSelect(response: SearchResult): void {
    this.selectedResult = response
  }
}
