import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html'
})
export class BiblePage {

  constructor(public navCtrl: NavController) {
    
  }

  openPage(page: string) {
    this.navCtrl.push(page);
  }

}
