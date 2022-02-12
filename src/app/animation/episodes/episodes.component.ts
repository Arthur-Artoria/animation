import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AnimationVideo } from 'src/app/home/entities/animation-video.entity';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit, OnChanges {
  @Input() videoType: number;
  @Input() videoTypes: string[];
  @Input() videoNames: string[];

  @Output() videoTypeChange = new EventEmitter<number>();
  @Output() checkVideo = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {}

  handleSegmentChange({ detail: { value } }: CustomEvent<{ value: string }>) {
    const checkIndex = Number(value);
    this.videoTypeChange.emit(checkIndex);
  }
}
