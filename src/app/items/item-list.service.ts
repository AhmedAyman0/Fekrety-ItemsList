import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemListService {
baseurl:string = './assets/data/MOCK_DATA.json';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseurl);
  }
}
