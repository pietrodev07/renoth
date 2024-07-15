interface SearchParam {
  key: string;
  value: string;
}

export type SearchParams = SearchParam[];

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
}
