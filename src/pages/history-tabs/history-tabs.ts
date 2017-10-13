import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HistoryAltPage} from "../history-alt/history-alt";
import {HistoryPage} from "../history/history";

/**
 * Generated class for the HistoryTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-tabs',
  templateUrl: 'history-tabs.html',
})
export class HistoryTabsPage {

  tab1Root = HistoryPage;
  tab2Root = HistoryAltPage;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryTabsPage');
  }


}
