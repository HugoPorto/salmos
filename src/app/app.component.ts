import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { PsalmsPage } from '../pages/psalms/psalms';
import { TestsPage } from '../pages/tests/tests';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.openHomePage(splashScreen);
      splashScreen.hide();
    });
  }

  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = TabsPage;
  }
}
