import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Animation } from './entities/animation.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  keyword = '';
  animations$: Observable<Animation[]>;


  constructor(private readonly apiService: ApiService, private router: Router) { }

  ngOnInit() { }


  handleSearchChange(event) {
    const { value } = event.detail;
    if (!value) { return; }

    this.animations$ = this.apiService.getSearchResult(value);
  }

  handleAnimationCardClick({ id, name }: Animation) {
    this.router.navigate(['/animation'], { queryParams: { id, name } });
  }
}
