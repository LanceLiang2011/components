import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items: Item[] = [];
  openIndex = 0;

  toggleAccordion(index: number) {
    if (this.openIndex === index) {
      this.openIndex = -1;
      return;
    }
    this.openIndex = index;
  }
}

interface Item {
  title: string;
  content: string;
}