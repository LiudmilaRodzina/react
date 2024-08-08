import { ReactNode } from 'react';

export interface HomeProps {
  initialProducts: Product[];
  initialCurrentPage: number;
  totalProducts: number;
}

export interface MainPageProps {
  initialProducts: Product[];
  initialCurrentPage: number;
  totalProducts: number;
}

export interface MainLayoutProps {
  children: ReactNode;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
  rating: string;
  shippingInformation: string;
  warrantyInformation: string;
  dimensions: {
    depth: number;
    height: number;
    width: number;
  };
}

export interface ProductListProps {
  products: Product[];
  onItemClick: (product: Product) => void;
  disabled: boolean;
  onSelect: (product: Product) => void;
  onUnselect: (productId: number) => void;
  selectedItems: Product[];
}

export interface ProductDeatilsViewProps {
  product: Product | null;
  onClose?: () => void;
}

export interface ProductDetailsProps {
  product: Product | null;
  loading: boolean;
  onClose?: () => void;
}

export interface ErrorProps {
  message: string;
  onClose: () => void;
}

export interface ButtonProps {
  type?: 'button' | 'submit';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface InputProps {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  disabled?: boolean;
  onPageChange: (page: number) => void;
}

export interface CardProps {
  product: Product;
  onClick: () => void;
  disabled: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onUnselect: () => void;
}

export interface CheckboxProps {
  checked: boolean;
  productId: number;
  onChange: (checked: boolean) => void;
  onClick: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export interface FlyoutProps {
  count: number;
  onClearSelectedItems: () => void;
  selectedProducts: Product[];
  style?: React.CSSProperties;
}

export interface SelectedItemsState {
  selectedItems: Product[];
}
