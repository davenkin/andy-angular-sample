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

export function singlePropertySortForEnum(sortProperty: string, sortDirection: SortDirection = SortDirection.ASC) {
  if (!sortProperty) {
    return undefined;
  }

  return [`${sortProperty},${sortDirection}`];
}

export function singlePropertySortForNumber(sortProperty: string, sortDirection = 1) {
  if (!sortProperty) {
    return undefined;
  }
  return [`${sortProperty},${sortDirection === 1 ? SortDirection.ASC : SortDirection.DESC}`];
}
