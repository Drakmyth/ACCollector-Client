import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UIRouterModule} from '@uirouter/angular';
import {BugsComponent} from './bugs/bugs.component';
import {FishComponent} from './fish/fish.component';

const bugsState = {name: 'bugs', url: '/bugs', component: BugsComponent};
const fishState = {name: 'fish', url: '/fish', component: FishComponent};

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: [bugsState, fishState], useHash: false}),
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BugsComponent,
    FishComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
