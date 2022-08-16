import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: calc(100vh - 3.75rem);

  img {
    margin-bottom: 5rem;
    @media (max-width: 768px) {
      width: 18.75rem;
    }
  }
`;
