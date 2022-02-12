import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnimationComponent } from './animation.component';
import { VideoComponent } from './video/video.component';
import { VideoPlayerModule } from '../video-player/video-player.module';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [AnimationComponent, VideoComponent, EpisodesComponent],
  imports: [CommonModule, IonicModule, VideoPlayerModule],
})
export class AnimationModule {}
