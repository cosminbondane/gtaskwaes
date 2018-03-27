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
  @Output() itemRemoved = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  checkItem(itemId, checked) {
    this.itemStatusChanged.emit({id: itemId, status: checked ? 'completed' : 'needsAction' });
  }

  removeItem(itemId) {
    this.itemRemoved.emit(itemId);
  }
}
