import {Component, OnInit} from '@angular/core';
import {BugsService} from '../services/bugs.service';
import {Bug} from '../models/bug';

@Component({
  selector: 'acc-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss'],
  providers: [BugsService]
})
export class BugsComponent implements OnInit {

  bugsNotInCollection: Bug[];
  bugsInCollection: Bug[];

  constructor(private bugsService: BugsService) {
  }

  ngOnInit() {
    this.bugsNotInCollection = BugsService.getAllInCollection();
    this.bugsInCollection = BugsService.getAllInCollection();
  }
}
