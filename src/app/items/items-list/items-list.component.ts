import { Component, OnInit , Inject, AfterViewInit, AfterContentInit} from '@angular/core';
import { ItemListService } from '../../items/item-list.service';
import { ModalService } from 'src/app/components/modal/modal.service';
import {MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedBackComponent } from 'src/app/components/feed-back/feed-back.component';
import { Item } from '../item';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit,AfterContentInit  {

  constructor(private ilService:ItemListService,private dialog:MatDialog,private spinner: NgxSpinnerService) { }
  items = [];
  count = 200;

  ngOnInit() {
    this.spinner.show();
    this.ilService.getAll().subscribe((data:any)=>
    {
      console.log(data)
      this.items=data;
    })
  }
  ngAfterContentInit () {
    this.spinner.hide();
  }
  loadMore(){
    this.count+=10;
  }
  loadLess(){
    if (this.count>10)
      this.count-=10;
  }

  openDialog(item:Item): void {
    const dialogRef = this.dialog.open(FeedBackComponent, {
      width: '400px',
      height:'615px',
      data: item
    });
  }
}
