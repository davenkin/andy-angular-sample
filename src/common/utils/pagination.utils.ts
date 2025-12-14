import { TableLazyLoadEvent } from 'primeng/table';

export interface PageQuery {
  pageNumber: number;
  pageSize: number;
  sortField?: string;
  sortOrder?: SortOrder;
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export function sortFieldFrom(event: TableLazyLoadEvent) {
  return event.sortField as string;
}

export function sortOrderFrom(event: TableLazyLoadEvent) {
  return event.sortOrder === -1 ? SortOrder.DESC : SortOrder.ASC;
}
