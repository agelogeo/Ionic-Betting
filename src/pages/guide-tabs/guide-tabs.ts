import { Component } from '@angular/core';
import {BonusPage} from "../bonus/bonus";
import {BonusAltPage} from "../bonus-alt/bonus-alt";
import {GuideZeroPage} from "../guide-zero/guide-zero";
import {GuideMngPage} from "../guide-mng/guide-mng";
import {GuideOnePage} from "../guide-one/guide-one";

@Component({
  selector: 'page-guide-tabs',
  templateUrl: 'guide-tabs.html',
})
export class GuideTabs {

  tab1Root = GuideZeroPage;
  tab2Root = GuideOnePage;
  tab3Root = GuideMngPage;

}
