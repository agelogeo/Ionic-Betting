import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonusTabsPage } from './bonus-tabs';

@NgModule({
  declarations: [
    BonusTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(BonusTabsPage),
  ],
})
export class BonusTabsPageModule {}
