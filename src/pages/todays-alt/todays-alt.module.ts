import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodaysAltPage } from './todays-alt';

@NgModule({
  declarations: [
    TodaysAltPage,
  ],
  imports: [
    IonicPageModule.forChild(TodaysAltPage),
  ],
})
export class TodaysAltPageModule {}
