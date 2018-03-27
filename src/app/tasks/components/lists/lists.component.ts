import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Input() items;
  @Input() selectedItemId;
  @Output() listSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectList(id: string) {
    if (this.selectedItemId !== id) {
      this.listSelected.emit(id);
    }
  }
}
