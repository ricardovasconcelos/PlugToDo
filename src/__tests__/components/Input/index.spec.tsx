import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '../../../components/Input';

describe('Input', () => {
  it('should be able to render a Input', () => {
    const { container } = render(<Input placeholder='input testing' />);
    const input = screen.getByPlaceholderText('input testing');
    expect(input).toHaveStyle({
      height: '3rem',
      borderRadius: '4px',
      padding: '1rem',
      lineHeight: '150%',
      width: '100%',
    });

    expect(input).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Changes its value when typing', async () => {
    render(<Input placeholder='input testing' />);

    const input = screen.getByPlaceholderText('input testing');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });
});
