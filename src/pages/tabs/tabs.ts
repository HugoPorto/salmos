import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BiblePage } from '../bible/bible';
import { CreditsPage } from '../credits/credits';
import { HomePage } from '../home/home';
import { PsalmsPage } from '../psalms/psalms';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BiblePage;
  tab3Root = CreditsPage;
  tab4Root = PsalmsPage;
  tab5Root = SearchPage;

  constructor() {

  }
}
