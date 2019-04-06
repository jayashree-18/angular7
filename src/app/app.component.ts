import { Component, OnInit } from '@angular/core';
import { AutocompleteService } from './autocomplete.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'autocomplete';

  public filteredData: any;
  constructor( private _service: AutocompleteService) {
  }

  ngOnInit() {
  
  }

  handleSearchText(event){
console.log('handleSearchText' + event);
this._service.getData(event).subscribe(eventResponse => {
console.log(eventResponse);
this.filteredData = eventResponse;
})
  }

  handleSeletedValue(event) {
    console.log('handleSeletedValue' + event);
  }
  
}
