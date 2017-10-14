import { Component } from '@angular/core';
import {BonusPage} from "../bonus/bonus";
import {BonusAltPage} from "../bonus-alt/bonus-alt";

@Component({
  selector: 'page-bonus-tabs',
  templateUrl: 'bonus-tabs.html',
})
export class BonusTabsPage {

  tab1Root = BonusPage;
  tab2Root = BonusAltPage;

}
