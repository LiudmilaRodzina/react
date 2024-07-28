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

export interface ProductDetailsProps {
  product: Product | null;
  loading: boolean;
  onClose?: () => void;
}

export interface NotificationProps {
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
