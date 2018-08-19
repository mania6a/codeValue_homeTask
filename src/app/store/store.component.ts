import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  items = [
    {id: 1,
     name: 'Dress',
     description: 'Red party dress',
     price: 34.6,
     choosen: false},
    {id: 2,
      name: 'Scirt',
      description: 'Navy casual scirt',
      price: 15,
      choosen: false},
    {id: 3,
      name: 'T-short',
      description: 'Long-sleeve T-short',
      price: 10,
      choosen: false},
    {id: 4,
      name: 'Shoes',
      description: 'Flip-flops',
      price: 5,
      choosen: false}
  ];
  isShown = false;
  item;
  constructor() { }

  ngOnInit() {}

  showDetails(item) {
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    }, 0);
    this.item = item;
  }
  add() {
    this.items.forEach(i => i.choosen = false);
    this.isShown = true;
    this.item = null;
  }

  toShown() {
    this.items.forEach(i => i.choosen = false);
    this.isShown = false;
  }
}
