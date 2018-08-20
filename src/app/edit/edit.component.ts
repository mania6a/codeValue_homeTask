import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudService} from '../crud.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input('item') item;
  @Input('items') items;
  @Output('displayed') displayed = new EventEmitter();
  form: FormGroup;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(this.item ? this.item.name : '', [Validators.required]),
      'description': new FormControl(this.item ? this.item.description : '', [Validators.required]),
      'price': new FormControl(this.item ? this.item.price : 0)
    });
  }

  save() {
    const newItem = this.form.value;
    if (this.item) {
      this.item.name = this.form.get('name').value;
      this.item.description = this.form.get('description').value;
      this.item.price = this.form.get('price').value;
      this.items.splice((this.item.id - 1), 1, this.item);
    } else {
      newItem.id = this.items.length !== 0 ? (this.items.length + 1) : 1;
      this.items.push(newItem);
    }
    this.displayed.emit();
    localStorage.setItem('itemsList', this.items.map(i => JSON.stringify(i)));
  }


}
