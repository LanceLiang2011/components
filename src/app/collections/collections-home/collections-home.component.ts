import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    {name: 'James', age: 24, job: 'Designer'},
    {name: 'Jill', age: 30, job: 'Developer'},
    {name: 'James', age: 40, job: 'Project Manager'},
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ];
}
