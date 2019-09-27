import { Component, OnInit ,Input } from '@angular/core';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import { Item } from 'src/app/items/item';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
@Input() item:Item ;
  mapMarker:any = faMapMarkedAlt;
  constructor() { }

  ngOnInit() {
    console.log('item',this.item.first_name);
    this.item.full_name = `${this.item.first_name} ${this.item.last_name}`;

  }

}
