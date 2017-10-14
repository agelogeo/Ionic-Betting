import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuideMngPage } from './guide-mng';

@NgModule({
  declarations: [
    GuideMngPage,
  ],
  imports: [
    IonicPageModule.forChild(GuideMngPage),
  ],
})
export class GuideMngPageModule {}
