import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {
  peoples: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

    this.peoples = [
      {
        "name": "Douglas  Pace"
      },
      {
        "name": "Mcleod  Mueller"
      },
      {
        "name": "Day  Meyers"
      },
      {
        "name": "Aguirre  Ellis"
      },
      {
        "name": "Cook  Tyson"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('TestsPage rodando...');
  }

}
