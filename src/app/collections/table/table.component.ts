import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
@Input('class') className = '';
@Input() data : any[] = [];
@Input() headers: Header[] = [];
}

interface Header {
  label: string,
  key: string,
}