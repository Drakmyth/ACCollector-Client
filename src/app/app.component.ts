import {Component} from '@angular/core';
import {MenuOption} from './models/menuOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topMenuOptions: MenuOption[] = [
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

  bottomMenuOptions = [
    {
      image: 'account.png',
      option: 'Account',
      state: 'account'
    },
    {
      image: 'help.png',
      option: 'Help',
      state: 'help'
    }
  ];
}
