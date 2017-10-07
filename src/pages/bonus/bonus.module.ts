import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonusPage } from './bonus';

@NgModule({
  declarations: [
    BonusPage,
  ],
  imports: [
    IonicPageModule.forChild(BonusPage),
  ],
})
export class BonusPageModule {}
