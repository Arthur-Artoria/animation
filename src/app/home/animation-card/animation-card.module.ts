import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationCardComponent } from './animation-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AnimationCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AnimationCardComponent]
})
export class AnimationCardModule { }
