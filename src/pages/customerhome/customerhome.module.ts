import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerhomePage } from './customerhome';

@NgModule({
  declarations: [
    CustomerhomePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerhomePage),
  ],
})
export class CustomerhomePageModule {}
