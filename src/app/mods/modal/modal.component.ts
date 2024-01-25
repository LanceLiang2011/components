import { Component, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() onClose = new EventEmitter();

  constructor (private elementRef: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

  hideModal() {
    this.onClose.emit();
  }
}
