import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTestamentPage } from './new-testament';

@NgModule({
  declarations: [
    NewTestamentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTestamentPage),
  ],
})
export class NewTestamentPageModule {}
