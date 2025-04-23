import { useState } from 'react';

interface DataTableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T;
    render?: (value: any) => React.ReactNode;
    sortable?: boolean;
  }[];
  onRowClick?: (item: T) => void;
}

export function DataTable<T>({ data, columns, onRowClick }: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (accessor: keyof T) => {
    if (sortColumn === accessor) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(accessor);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;

    const aVal = a[sortColumn];
    const bVal = b[sortColumn];

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }

    if (aVal instanceof Date && bVal instanceof Date) {
      return sortDirection === 'asc'
        ? aVal.getTime() - bVal.getTime()
        : bVal.getTime() - aVal.getTime();
    }

    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            {columns.map((column, index) => (
              <th
                key={index}
                onClick={() => column.sortable && handleSort(column.accessor)}
                className={`px-4 py-3 text-left text-sm font-medium text-gray-500 ${
                  column.sortable ? 'cursor-pointer select-none' : ''
                }`}
              >
                <div className="flex items-center gap-1">
                  {column.header}
                  {column.sortable && (
                    <span className="text-xs text-gray-400 leading-none w-2 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/></svg>
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(item)}
              className="border-b transition-colors hover:bg-gray-50 cursor-pointer"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-3 text-sm text-gray-900">
                  {column.render
                    ? column.render(item[column.accessor])
                    : String(item[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
