import { useState } from 'react';

export const usePasswordVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prev) => !prev);
  return { isVisible, toggleVisibility };
};

export const calculatePasswordStrength = (password: string): number => {
  let strength = 0;
  if (/[A-Z]/.test(password)) {
    strength += 1;
  }
  if (/[a-z]/.test(password)) {
    strength += 1;
  }
  if (/\d/.test(password)) {
    strength += 1;
  }
  if (/[!@#$%^&*(),.?":{}|<>_\-\\[\]~+=;'/]/.test(password)) {
    strength += 1;
  }
  return strength;
};

export function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}
