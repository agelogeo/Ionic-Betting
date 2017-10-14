import {Component, OnInit} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs';

@Component({
  selector: 'page-bonus',
  templateUrl: 'bonus.html',
})
export class BonusPage implements OnInit{

  tips:any;
  sheetName: string = 'andriko_today';
  sheetID: string = '175XqnHhcOS8CVoBY08xMhaDO39VmauBEFKU9qeaHS3U';

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonusPage');
  }

  ngOnInit(){
    console.log('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName);
    this.http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id='+this.sheetID+'&sheet='+this.sheetName)
      .map(res => res.json()).subscribe(data => {
      this.tips = data.andriko_today;
      console.log(this.tips);
    })
  }
}
