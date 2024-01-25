import { Component } from '@angular/core';
import { Item } from '../item-list/item-list.component';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrl: './views-home-component.component.css',
})
export class ViewsHomeComponentComponent {
  data = [
    { label: 'faves', value: 22 },
    { label: 'views', value: '31,200' },
    { label: 'users', value: '9,120' },
  ];

  items: Item[] = [{ title: 'Test', image: 'assets/images/couch.jpeg', description: 'lorem' }];
}
