import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../../items/item-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  constructor(private ilService:ItemListService) { }
  items = [];
  count = 200;

  ngOnInit() {
    this.ilService.getAll().subscribe((data:any)=>
    {
      console.log(data)
      this.items=data;
    })
  }
  loadMore(){
    this.count+=10;
  }
  loadLess(){
    if (this.count>10)
      this.count-=10;
  }
}
