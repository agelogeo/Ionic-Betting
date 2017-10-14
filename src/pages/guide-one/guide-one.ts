import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {SocialSharing} from "@ionic-native/social-sharing";
import {SharePage} from "../share/share";

/**
 * Generated class for the GuideOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guide-one',
  templateUrl: 'guide-one.html',
})
export class GuideOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public socialSharing: SocialSharing,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuideOnePage');
  }

  regularShare(event: MouseEvent){
    const popover = this.popoverCtrl.create(SharePage);
    popover.present({ev: event});
    popover.onDidDismiss(
      data => {
        if (data == null) {

        }else{
          if (data.action == "android"){
            this.socialSharing.share("Hello can you install this app?", "Daily Betting Tips", null, "https://play.google.com/store/apps/details?id=gr.betting.admin.bettingtips");
          } else if (data.action == "ios"){

          }else if (data.action == "windows"){

          }
        }
      }
    )
  }
}
