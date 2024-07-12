export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
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
  onPageChange: (page: number) => void;
}
