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
  product: Product;
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
}

export interface InputProps {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange: (value: string) => void;
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
  disabled?: boolean;
}
