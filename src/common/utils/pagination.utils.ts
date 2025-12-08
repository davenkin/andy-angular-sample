export interface PageQuery {
  pageNumber: number;
  pageSize: number;
  pageSort?: string[];
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export function singlePropertySortFor(sortProperty: string, sortDirection: SortDirection = SortDirection.ASC) {
  return [`${sortProperty},${sortDirection}`];
}
