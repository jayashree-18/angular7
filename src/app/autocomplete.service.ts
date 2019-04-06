import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private _http: HttpClient) { }

  getData(text) {
    let url;

    if (text == 'test') {
      console.log('ggg' + text);
      return this._http.get('./assets/data1.json', {})
    } else {
      console.log(text);
      return this._http.get('./assets/data2.json', {})
    }
  }
}
