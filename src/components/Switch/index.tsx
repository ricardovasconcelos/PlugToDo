import { SwithContainer, SwitchWrapper, SwitchCheckbox, SwitchItem } from './styles';

interface SwitchProps {
  label: string;
  checked?: boolean;
}

export function Switch({ label, checked }: SwitchProps) {
  return (
    <SwithContainer>
      <p>{label}</p>

      <SwitchWrapper>
        <SwitchCheckbox id='checkbox' type='checkbox' checked={checked} />
        <SwitchItem htmlFor='checkbox' />
      </SwitchWrapper>
    </SwithContainer>
  );
}
