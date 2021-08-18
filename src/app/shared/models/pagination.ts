import { IBook } from './book';

export interface IPagination {
  succes: boolean;
  pageIndex?: boolean;
  pageSize?: boolean;
  data: IBook[];
}
