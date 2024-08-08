import { PRODUCTS_API_URL } from './../config/api';
import { Product } from '../interfaces/interfaces';

export const convertToCSV = (data: Product[]): string => {
  if (!data || data.length === 0) return '';
  const header = 'Name,Price ($),Description,Details URL\n';
  const rows = data
    .map(
      (item) =>
        `${item.title},${item.price},${item.description.replace(
          /,/g,
          ' '
        )},'${PRODUCTS_API_URL}products/${item.id}`
    )
    .join('\n');
  return header + rows;
};

export const generateCSVUrl = (data: Product[]): string | null => {
  const csvContent = convertToCSV(data);
  if (!csvContent) return null;
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  return url;
};
