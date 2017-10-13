import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OperatorhomePage} from "../operatorhome/operatorhome";
import {Http} from "@angular/http";
import 'rxjs';

/**
 * Generated class for the OperatorsigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operatorsignin',
  templateUrl: 'operatorsignin.html',
})
export class OperatorsigninPage {

  posts : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperatorsigninPage');
  }

  onGoToOperatorHome(){
    console.log("https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=175XqnHhcOS8CVoBY08xMhaDO39VmauBEFKU9qeaHS3U&sheet=tameiarxis_today");
    this.http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=175XqnHhcOS8CVoBY08xMhaDO39VmauBEFKU9qeaHS3U&sheet=tameiarxis_today').map(res => res.json()).subscribe(data => {
      this.posts = data.tameiarxis_today;
      console.log("Date : "+data.tameiarxis_today[0].DATE);
    });


    //this.navCtrl.setRoot(OperatorhomePage);
  }

}
