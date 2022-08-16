import { screen, render } from '@testing-library/react';

import { Button } from '../../../components/Button';

describe('Button', () => {
  it('should be able to render a Button', () => {
    const width = 100;
    const { container } = render(<Button width={width}>Criar Tarefa</Button>);
    expect(screen.getByRole('button', { name: /criar tarefa/i })).toHaveStyle({
      padding: '1rem',
      fontSize: '0.875rem',
      width: `${width}rem`,
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
