import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  shouldModalShown = false;
  items = [
    { title: 'Test', content: 'lorem ipsum lalal' },
    { title: 'Test2', content: 'hodorola ipsum lalala' },
    { title: 'Test3', content: 'this.shouldModalShown true;' },
  ];
  showModal() {
    this.shouldModalShown = true;
  }

  hideModal() {
    this.shouldModalShown = false;
  }
}
