import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.75rem;

  img {
    margin-left: 1rem;
  }

  a {
    &:focus {
      box-shadow: none;
    }
  }
`;
