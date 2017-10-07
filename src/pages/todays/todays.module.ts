import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodaysPage } from './todays';

@NgModule({
  declarations: [
    TodaysPage,
  ],
  imports: [
    IonicPageModule.forChild(TodaysPage),
  ],
})
export class TodaysPageModule {}
