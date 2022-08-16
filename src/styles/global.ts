import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['brand-100']};
    -webkit-appearance: none;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  
  .Toastify__toast-theme--colored {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1rem;
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: ${(props) => props.theme['secondary-100']};

  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    background-color: ${(props) => props.theme['red-500']};
  }
`;
