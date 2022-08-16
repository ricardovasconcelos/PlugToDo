import { screen, render, waitFor, fireEvent } from '@testing-library/react';

import { Switch } from '../../../components/Switch';

describe('Header', () => {
  it('should be able to render a Header', () => {
    const { container } = render(<Switch label='switch label' />);

    const SwitchContainer = screen.getAllByTestId('switch-container');
    waitFor(() =>
      expect(SwitchContainer).toHaveStyle({
        display: 'flex',
        justifyContent: 'space-between',
      }),
    );

    waitFor(() => expect(SwitchContainer).toBeInTheDocument());

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Changes its value when click', async () => {
    render(<Switch label='switch label' />);

    const switchButton = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(switchButton);

    await waitFor(() => {
      expect(switchButton.checked).toEqual(true);
    });
  });
});
