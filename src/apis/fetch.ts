import { HOST } from './constants';

export class AppFetch {
  static async get<T = any>(url: string, config?: FetchRequestConfig) {
    return this.request(url, config).then(res => res.json()) as Promise<T>;
  }

  static request(url: string, config?: FetchRequestConfig) {
    const params = this.formatParams(config);

    url = url.includes('http') ? url : `${HOST}${url}`;
    url = `${url}${params}`;
    return fetch(url);
  }

  static formatParams(config: FetchRequestConfig = {}): string {
    const { params } = config;
    if (!params) {
      return '';
    }

    const string = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return `?${string}`;
  }
}
