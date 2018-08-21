import {Component, OnInit, ViewChild} from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
@ViewChild('search') search;
/*
  itemsDefault = [
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
*/
  isShown = false;
  item;
  items = [];
  itemsDefault = [];
  progress = 0;
  constructor(private service: CrudService) { }

  ngOnInit() {
    if (localStorage.getItem('itemsList')) {
      this.itemsDefault = JSON.parse(localStorage.getItem('itemsList'));
      this.items = this.itemsDefault;
    } else {
      this.service.getItems().then((data: Array<any>) => {
        this.itemsDefault = data;
        this.items = this.itemsDefault;
      });
    }
  }

  toSearch() {
     this.items = this.itemsDefault.filter(item => item.name.toLowerCase().includes(this.search.nativeElement.value.toLowerCase()));
  }

  showDetails(item) {
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    }, 0);
    this.item = item;
  }
  add() {
    this.items.forEach(i => i.choosen = false);
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    }, 0);
    this.item = null;
  }

  toShown() {
    this.items.forEach(i => i.choosen = false);
    this.isShown = false;
  }
}
