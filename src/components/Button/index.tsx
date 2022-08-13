import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width: number;
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}
