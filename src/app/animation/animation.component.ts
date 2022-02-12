import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { merge, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { AnimationVideo } from '../home/entities/animation-video.entity';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {
  checkVideoType = 0;
  animationName: string;
  animationId: string;
  animationVideos: {
    name: string;
    value: number;
    list: AnimationVideo[];
  }[];

  visibleVideoPlayer = false;

  get videoTypes(): string[] {
    return this.animationVideos?.map(({ name }) => name);
  }

  get checkVideoNames(): string[] {
    return this.animationVideos?.[this.checkVideoType]?.list?.map(({ name }) => name);
  }

  get checkVideo(): AnimationVideo {
    return this.animationVideos?.[this.checkVideoType]?.list?.[this.checkVideoIndex];
  }

  private checkVideoIndex = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly toastController: ToastController,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryMap) => {
      this.animationId = queryMap.get('id');
      this.animationName = queryMap.get('name');
      this.apiService
        .getAnimationVideos(this.animationId)
        .subscribe((animationVideos) => (this.animationVideos = animationVideos));
    });
  }

  handleVideoClick(index: number) {
    this.checkVideoIndex = index;
    this.visibleVideoPlayer = true;
  }

  handleSwitchVisibleVideoPlayer() {
    this.visibleVideoPlayer = !this.visibleVideoPlayer;
  }

  async handleChangeVideo(direction: 'prev' | 'next') {
    let message: string;

    switch (direction) {
      case 'prev':
        if (this.checkVideoIndex > 1) {
          this.checkVideoIndex--;
        } else {
          message = '已经是第一集';
        }
        break;

      case 'next':
        if (this.checkVideoIndex < this.checkVideoNames.length - 1) {
          this.checkVideoIndex++;
        } else {
          message = '已经是最后一集';
        }
        break;

      default:
        break;
    }

    if (!message) {
      return;
    }

    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
