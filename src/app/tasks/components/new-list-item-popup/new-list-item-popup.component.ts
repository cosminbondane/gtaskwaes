import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-list-item-popup',
  templateUrl: './new-list-item-popup.component.html',
  styleUrls: ['./new-list-item-popup.component.css']
})
export class NewListItemPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewListItemPopupComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
