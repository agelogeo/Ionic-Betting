import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs';
import {SocialSharing} from "@ionic-native/social-sharing";
import {SharePage} from "../share/share";

/**
 * Generated class for the TodaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todays',
  templateUrl: 'todays.html',
})
export class TodaysPage implements OnInit{

  tips:any;
  sheetName: string = 'standard_today';
  sheetID: string = '175XqnHhcOS8CVoBY08xMhaDO39VmauBEFKU9qeaHS3U';


  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http,
              private socialSharing: SocialSharing,private popoverCtrl: PopoverController) {

  }


  ionViewWillEnter() {
    console.log('ionViewDidLoad TodaysPage');

  }

  ngOnInit(){
    console.log('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName);
    this.http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName)
      .map(res => res.json()).subscribe(data => {
      this.tips = data.standard_today;
      console.log(this.tips);
    })
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
