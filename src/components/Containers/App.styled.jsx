import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${p => p.theme.space[4]}px;
  width: 768px;
  padding: ${p => p.theme.space[4]}px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 340px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContainerProfile = styled.div``;
