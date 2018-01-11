import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {

  }

  showLoading() {
    let loader = this.loadingCtrl.create({
      content: "loading...",
      duration: 3000
    });
    loader.present();
  }
 
}
