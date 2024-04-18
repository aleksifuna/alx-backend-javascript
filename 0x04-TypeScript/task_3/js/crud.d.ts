import { RowId, RowElement } from "./interface";

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowId): void;
export function updateRow(rowID: RowId, row: RowElement): number;