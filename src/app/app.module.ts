import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TodaysPage} from "../pages/todays/todays";
import {HistoryPage} from "../pages/history/history";
import {BonusPage} from "../pages/bonus/bonus";
import {HttpModule} from "@angular/http";
import {TabsPage} from "../pages/tabs/tabs";
import {TodaysAltPage} from "../pages/todays-alt/todays-alt";
import {HistoryTabsPage} from "../pages/history-tabs/history-tabs";
import {HistoryAltPage} from "../pages/history-alt/history-alt";
import {BonusTabsPage} from "../pages/bonus-tabs/bonus-tabs";
import {BonusAltPage} from "../pages/bonus-alt/bonus-alt";

@NgModule({
  declarations: [
    MyApp,
    TodaysPage,
    TodaysAltPage,
    TabsPage,
    HistoryPage,
    HistoryAltPage,
    HistoryTabsPage,
    BonusPage,
    BonusAltPage,
    BonusTabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodaysPage,
    TodaysAltPage,
    TabsPage,
    HistoryPage,
    HistoryAltPage,
    HistoryTabsPage,
    BonusPage,
    BonusAltPage,
    BonusTabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
