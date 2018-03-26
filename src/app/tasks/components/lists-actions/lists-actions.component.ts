import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewListPopupComponent } from '../new-list-popup/new-list-popup.component';

@Component({
  selector: 'app-lists-actions',
  templateUrl: './lists-actions.component.html',
  styleUrls: ['./lists-actions.component.css']
})
export class ListsActionsComponent implements OnInit {

  @Output() newListAdded = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNewList() {
    const dialogRef = this.dialog.open(NewListPopupComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe(listName => {
      if (listName) {
        this.newListAdded.emit(listName);
      }
    });
  }
}
