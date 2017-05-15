import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOptions = [
    {
      image: 'bugs.png',
      option: 'Bugs',
      state: 'bugs'
    },
    {
      image: 'fish.png',
      option: 'Fish',
      state: 'fish'
    },
    {
      image: 'fossils.png',
      option: 'Fossils',
      state: 'fossils'
    },
    {
      image: 'music.png',
      option: 'Music',
      state: 'music'
    },
    {
      image: 'paintings.png',
      option: 'Paintings',
      state: 'paintings'
    }
  ];
}
