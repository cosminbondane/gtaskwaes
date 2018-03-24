import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewListItemPopupComponent } from '../new-list-item-popup/new-list-item-popup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-item-actions',
  templateUrl: './list-item-actions.component.html',
  styleUrls: ['./list-item-actions.component.css']
})
export class ListItemActionsComponent implements OnInit {

  @Input() disabled: boolean;

  @Output() newListItemAdded = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNewListItem() {
    let dialogRef = this.dialog.open(NewListItemPopupComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe(text => {
      if(text) {
        this.newListItemAdded.emit(text);
      }
    });
  }
}
