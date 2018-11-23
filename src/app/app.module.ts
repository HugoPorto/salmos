import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BiblePage } from '../pages/bible/bible';
import { CreditsPage } from '../pages/credits/credits';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewTestamentPageModule } from '../pages/new-testament/new-testament.module';
import { PsalmsPageModule } from '../pages/psalms/psalms.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { TestsPageModule } from '../pages/tests/tests.module';
import { SearchPageModule } from '../pages/search/search.module';
import { ShowPsalmPageModule } from '../pages/show-psalm/show-psalm.module';

@NgModule({
  declarations: [
    MyApp,
    BiblePage,
    CreditsPage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'top'
    }),
    NewTestamentPageModule,
    PsalmsPageModule,
    TabsPageModule,
    TestsPageModule,
    SearchPageModule,
    ShowPsalmPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BiblePage,
    CreditsPage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
