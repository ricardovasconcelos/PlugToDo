import { InputHTMLAttributes } from 'react';
import { SwithContainer, SwitchWrapper, SwitchCheckbox, SwitchItem } from './styles';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
}

export function Switch({ label, checked, ...props }: SwitchProps) {
  return (
    <SwithContainer data-testid='switch-container'>
      <p>{label}</p>

      <SwitchWrapper>
        <SwitchCheckbox id='checkbox' type='checkbox' checked={checked} {...props} />
        <SwitchItem htmlFor='checkbox' />
      </SwitchWrapper>
    </SwithContainer>
  );
}
