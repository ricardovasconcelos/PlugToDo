import { InputHTMLAttributes } from 'react';

import { InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <InputComponent {...props} />;
}
