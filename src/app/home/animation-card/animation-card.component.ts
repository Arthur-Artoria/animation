import { Component, Input, OnInit } from '@angular/core';
import { Animation } from '../entities/animation.entity';

@Component({
  selector: 'app-animation-card',
  templateUrl: './animation-card.component.html',
  styleUrls: ['./animation-card.component.scss'],
})
export class AnimationCardComponent implements OnInit {

  @Input() animation?: Animation;

  constructor() { }

  ngOnInit() {}

}
