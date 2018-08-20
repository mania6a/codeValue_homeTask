import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input('item') item;
@Input('items') items;
@Input('ind') ind;
@Output('choosen') choosen = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.items.forEach(i => i.choosen = false);
    this.item.choosen = true;
    this.choosen.emit(this.item);
  }

  delete() {
    this.items.splice(this.ind, 1);
    localStorage.setItem('itemsList', this.items.map(i => JSON.stringify(i)));
  }
}
