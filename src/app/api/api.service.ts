import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimationVideo } from '../home/entities/animation-video.entity';
import { Animation } from '../home/entities/animation.entity';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private static baseUrl = 'http://api.arthur-altria.com/animation';
  constructor(private http: HttpClient) {}

  getSearchResult(keyword: string): Observable<Animation[]> {
    return this.http.get<Animation[]>(this.url('/videoList'), { params: { word: keyword, app: 10 } });
  }

  getAnimationVideos(id: string) {
    return this.http.get<{ name: string; value: number; list: AnimationVideo[] }[]>(this.url('/playList'), {
      params: { id, app: 10 },
    });
  }

  private readonly url = (url: string) => `${ApiService.baseUrl}${url}`;
}
