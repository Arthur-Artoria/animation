import { HOST } from './constants';

export class AppFetch {
  static get<T = any>(url: string) {
    return this.request(url).then(res => res.json()) as Promise<T>;
  }
  static request(url: string) {
    return fetch(`${HOST}${url}`);
  }
}
