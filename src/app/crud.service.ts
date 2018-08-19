import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
data: any;
  constructor() { }

  setData(data) {
    console.log(data);
    this.data = null;
    this.data = data;
  }

  getData() {
    return this.data;
  }

  clear() {
    this.data = null;
  }
}
