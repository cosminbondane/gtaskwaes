import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-section',
  templateUrl: './lists-section.component.html',
  styleUrls: ['./lists-section.component.css']
})
export class ListsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onListSelected(id: number) {
    console.log(id);
  }
}
