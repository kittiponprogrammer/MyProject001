import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  namePerson: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  showAlert(name: string){
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Hellow ' + name,
       buttons: ['OK']
    });
    alert.present();
  }
}
