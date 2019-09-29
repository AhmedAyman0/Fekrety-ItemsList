import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number;
  constructor(private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.params.subscribe(
      resp=>console.log(resp['id'])
    )
  }

}
