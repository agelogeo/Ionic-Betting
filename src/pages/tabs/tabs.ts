import { Component } from '@angular/core';
import {TodaysPage} from "../todays/todays";
import {TodaysAltPage} from "../todays-alt/todays-alt";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = TodaysPage;
  tab2Root = TodaysAltPage;



}
