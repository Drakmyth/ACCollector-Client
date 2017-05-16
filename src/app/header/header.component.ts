import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Character} from '../models/character';
import {Games} from '../models/games';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CharacterService]
})
export class HeaderComponent implements OnInit {

  characters: Character[];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characters = this.characterService.getAllCharacters();
    this.selectedCharacter = this.characters[0];
  }
}
