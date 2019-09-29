import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from './dialog-data';
import { Item } from 'src/app/items/item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {

  durationInSeconds:number=2;
  currentRate:number;
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FeedBackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.currentRate = this.data.rate;
  }
  rate() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      
    });
    this.dialogRef.close();
  }
  close(): void {
    this.dialogRef.close();
  }

}
