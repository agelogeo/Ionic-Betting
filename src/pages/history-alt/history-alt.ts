import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs';

/**
 * Generated class for the HistoryAltPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-alt',
  templateUrl: 'history-alt.html',
})
export class HistoryAltPage implements OnInit{

  tips:any;
  sheetName: string = 'tameiarxis_history';
  sheetID: string = '175XqnHhcOS8CVoBY08xMhaDO39VmauBEFKU9qeaHS3U';

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryAltPage');
  }

  ngOnInit(){
    console.log('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName);
    this.http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName)
      .map(res => res.json()).subscribe(data => {
      this.tips = data.tameiarxis_history;
      console.log(this.tips);
    })
  }

  checkScore(gotcha : any){
    if(gotcha.toString() == "true"){
      return "gotchaTrue";
    }else if(gotcha.toString() == "false"){
      return "gotchaFalse";
    }
    return "primary";
  }

  checkAvatar(gotcha : any){

    if(gotcha.toString() == "true"){
      return "assets/true.png";
    }else if(gotcha.toString() == "false"){
      return "assets/false.png";
    }
    return "assets/ball.png";
  }
}
