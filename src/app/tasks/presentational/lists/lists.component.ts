import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Output() listSelected = new EventEmitter<number>();

  currentListId: number;

  constructor() { }

  ngOnInit() {
    this.currentListId = 1;
  }

  selectList(id: number) {
    if (this.currentListId !== id) {
      this.listSelected.emit(id);
      this.currentListId = id;
    }
  }
}
