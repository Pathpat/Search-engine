import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm='';
  constructor(
    private searchService :SearchService
  ){}
  searchWeb(): void {
      if(this.searchTerm === '') return;
      this.searchService.getResults(this.searchTerm)
      .subscribe(
        (response : any)=>{
       this.searchService.passResults({results : response.value,count : response.totalCount});
        }
      );
  }

}
