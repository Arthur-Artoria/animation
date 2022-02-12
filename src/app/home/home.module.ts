import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimationCardModule } from './animation-card/animation-card.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AnimationCardModule,
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent],
})
export class HomeModule { }
