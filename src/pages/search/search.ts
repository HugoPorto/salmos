import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ShowPsalmPage } from '../show-psalm/show-psalm';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  openPsalm(value) {
    let showPsalms = this.modal.create('ShowPsalmPage', { value: value });
    showPsalms.present();
  }
}
