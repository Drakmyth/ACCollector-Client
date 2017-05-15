import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {

  bugs = [
    {
      id: 1,
      name: 'Common Butterfly',
      price: 80,
      location: 'Near Flowers',
      onIsland: true,
      notes: ''
    },
    {
      id: 2,
      name: 'Snail',
      price: 250,
      location: 'On Flowers',
      onIsland: false,
      notes: 'Only available when raining'
    },
    {
      id: 3,
      name: 'Hermit Crab',
      price: 1000,
      location: 'Beach',
      onIsland: true,
      notes: 'Exclusive to Island'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
