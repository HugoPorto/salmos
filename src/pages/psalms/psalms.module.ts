import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsalmsPage } from './psalms';

@NgModule({
  declarations: [
    PsalmsPage,
  ],
  imports: [
    IonicPageModule.forChild(PsalmsPage),
  ],
})
export class PsalmsPageModule {}
