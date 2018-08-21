import { Injectable } from '@angular/core';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
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

  constructor() { }

  getItems () {
    const items = this.itemsDefault;
    return new Promise((resolve, reject) => {
      setTimeout(resolve(items), 5000);
    });
  }
}
