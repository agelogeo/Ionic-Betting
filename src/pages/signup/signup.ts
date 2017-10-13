import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SigninPage} from "../signin/signin";
import {OperatorsigninPage} from "../operatorsignin/operatorsignin";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('nav') nav : NavController;
  signinPage = SigninPage;
  operatorsigninPage = OperatorsigninPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onGo(page : any){
    this.navCtrl.push(page);
  }

  onSubmit(){

  }
}
