import { Component, OnInit, Input } from '@angular/core';
import { ListItemModel } from '../../models/list.item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() items: ListItemModel[];

  constructor() { }

  ngOnInit() {
  }

}
