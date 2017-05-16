import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UIRouterModule} from '@uirouter/angular';
import {BugsComponent} from './bugs/bugs.component';
import {FishComponent} from './fish/fish.component';
import {YesNoPipe} from './pipes/yesNo.pipe';
import {BugsService} from './services/bugs.service';
import {FossilsComponent} from './fossils/fossils.component';
import {MusicComponent} from './music/music.component';
import {PaintingsComponent} from './paintings/paintings.component';
import {AccountComponent} from './account/account.component';
import {HelpComponent} from './help/help.component';
import {HeaderComponent} from './header/header.component';
import {CharacterService} from './services/character.service';
import {GroupByPipe} from './pipes/groupBy.pipe';

const bugsState = {name: 'bugs', url: '/bugs', component: BugsComponent};
const fishState = {name: 'fish', url: '/fish', component: FishComponent};
const fossilsState = {name: 'fossils', url: '/fossils', component: FossilsComponent};
const musicState = {name: 'music', url: '/music', component: MusicComponent};
const paintingsState = {name: 'paintings', url: '/paintings', component: PaintingsComponent};
const accountState = {name: 'account', url: '/account', component: AccountComponent};
const helpState = {name: 'help', url: '/help', component: HelpComponent};

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: [
        bugsState,
        fishState,
        fossilsState,
        musicState,
        paintingsState,
        accountState,
        helpState], useHash: false
    }),
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BugsComponent,
    FishComponent,
    YesNoPipe,
    FossilsComponent,
    MusicComponent,
    PaintingsComponent,
    AccountComponent,
    HelpComponent,
    HeaderComponent,
    GroupByPipe
  ],
  providers: [
    BugsService,
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
