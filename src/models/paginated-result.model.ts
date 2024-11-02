export class PaginatedResultModel<T> {
  pageIndex: number;
  totalPages: number;
  totalRecords: number;
  items: T[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;

  constructor(
    pageIndex: number,
    totalPages: number,
    totalRecords: number,
    items: T[],
    hasPreviousPage: boolean,
    hasNextPage: boolean
  ) {
    this.pageIndex = pageIndex;
    this.totalPages = totalPages;
    this.totalRecords = totalRecords;
    this.items = items;
    this.hasPreviousPage = hasPreviousPage;
    this.hasNextPage = hasNextPage;
  }
}
