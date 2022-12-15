import styled from 'styled-components';

export const FriendsItemStyled = styled.li`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Status = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => (p.checkOnline ? p.theme.colors.green : p.theme.colors.red)};
`;
