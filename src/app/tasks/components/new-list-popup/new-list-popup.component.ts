import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-list-popup',
  templateUrl: './new-list-popup.component.html',
  styleUrls: ['./new-list-popup.component.css']
})
export class NewListPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewListPopupComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
