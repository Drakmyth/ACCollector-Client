import {Component, OnInit} from '@angular/core';
import {BugsService} from '../services/bugs.service';
import {Bug} from '../models/bug';

@Component({
  selector: 'app-bugs',
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
    this.bugsNotInCollection = this.bugsService.getAllInCollection();
    this.bugsInCollection = this.bugsService.getAllInCollection();
  }
}
