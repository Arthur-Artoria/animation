import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationVideo } from 'src/app/home/entities/animation-video.entity';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() animationVideo: AnimationVideo;

  @Output() backClick = new EventEmitter<void>();
  @Output() prevClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();

  get videoSrc(): string {
    return this.animationVideo.src ?? this.animationVideo.download ?? this.animationVideo.web;
  }

  constructor() {}

  ngOnInit() {}
}
