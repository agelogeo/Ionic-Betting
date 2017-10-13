import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OperatorhomePage} from "../operatorhome/operatorhome";

/**
 * Generated class for the OperatorsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operatorsignup',
  templateUrl: 'operatorsignup.html',
})
export class OperatorsignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperatorsignupPage');
  }

  onGoToOperatorHome(){
    this.navCtrl.setRoot(OperatorhomePage);
  }
}
