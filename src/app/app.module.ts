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

@NgModule({
  declarations: [
    MyApp,
    TodaysPage,
    HistoryPage,
    BonusPage
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
    HistoryPage,
    BonusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
