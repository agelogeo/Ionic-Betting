import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, PopoverController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
import {HistoryTabsPage} from "../pages/history-tabs/history-tabs";
import {BonusTabsPage} from "../pages/bonus-tabs/bonus-tabs";
import {GuideTabs} from "../pages/guide-tabs/guide-tabs";
import {SharePage} from "../pages/share/share";
import {SocialSharing} from "@ionic-native/social-sharing";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Today\'s Tips', component: TabsPage , icon : 'home' },
      { title: 'History of Tips', component: HistoryTabsPage , icon : 'paper' },
      { title: 'Bonus Tips', component: BonusTabsPage , icon : 'flame' },
      { title: 'Betting Guide', component: GuideTabs , icon : 'flame' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
