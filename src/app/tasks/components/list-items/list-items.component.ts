import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListItemModel } from '../../models/list.item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() items: ListItemModel[];
  @Output() itemStatusChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  itemChecked(itemId, checked) {
    this.itemStatusChanged.emit({id: itemId, status: checked ? 'completed' : 'needsAction' });
  }
}
