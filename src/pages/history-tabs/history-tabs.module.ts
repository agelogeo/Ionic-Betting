import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryTabsPage } from './history-tabs';

@NgModule({
  declarations: [
    HistoryTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryTabsPage),
  ],
})
export class HistoryTabsPageModule {}
