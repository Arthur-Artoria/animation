interface SearchResponseItem {
  detail: string;
  name: string;
  id: string;
}
type SearchResponse = SearchResponseItem[];

interface GetVideoDataResponse {
  name: string;
  playList: Array<{
    name: string;
    value: number;
    list: Array<{ name: string; web: string }>;
  }>;
}

type GetPlayUrlResponse = string;
