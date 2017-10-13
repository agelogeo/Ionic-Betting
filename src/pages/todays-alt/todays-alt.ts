import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs';
import {Http} from "@angular/http";

/**
 * Generated class for the TodaysAltPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todays-alt',
  templateUrl: 'todays-alt.html',
})
export class TodaysAltPage implements OnInit{


  tips:any;
  sheetName: string = 'tameiarxis_today';
  sheetID: string = '175XqnHhcOS8CVoBY08xMhaDO39VmauBEFKU9qeaHS3U';

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodaysAltPage');
  }

  ngOnInit(){
    console.log('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName);
    this.http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName)
      .map(res => res.json()).subscribe(data => {
      this.tips = data.tameiarxis_today;
      console.log(this.tips);
    })
  }
}
