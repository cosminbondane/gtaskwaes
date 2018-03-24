import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Input() items;
  @Input() selectedItemId;

  @Output() listSelected = new EventEmitter<number>();

  currentListId: number;

  constructor() { }

  ngOnInit() {
  }

  selectList(id: number) {
    if (this.selectedItemId !== id) {
      this.listSelected.emit(id);
    }
  }
}
