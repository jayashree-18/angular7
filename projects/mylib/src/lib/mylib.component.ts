import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  templateUrl: './mylib.component.html',
  styles: []
})
export class MylibComponent implements OnInit {

  @Input() data: any[];
  @Input() defaultValue: string;
  @Output() searchText = new EventEmitter<any>();
  @Output() seletedItem = new EventEmitter<any>();
  public selectedValue: string;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.selectedValue = this.defaultValue; 
  }

  searchItem(searchbox) {
      console.log(searchbox);
      this.searchText.emit(searchbox);
  }

  onSelectItem(role){
    console.log(role);
    this.selectedValue = role.name;
    this.seletedItem.emit(this.selectedValue);
  }

}
