import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPsalmPage } from './show-psalm';

@NgModule({
  declarations: [
    ShowPsalmPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPsalmPage),
  ],
})
export class ShowPsalmPageModule {}
