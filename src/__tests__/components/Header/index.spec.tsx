import { screen, render } from '@testing-library/react';

import { Header } from '../../../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  it('should be able to render a Header', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(screen.getByRole('banner')).toHaveStyle({
      height: '3.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
