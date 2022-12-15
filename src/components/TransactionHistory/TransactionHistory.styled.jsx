import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: center;
`;

export const TableHead = styled.thead`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundTableHead};
  letter-spacing: 0.02em;
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const TableHeadItem = styled.th`
  padding: ${p => p.theme.space[3]}px;
  transition: color 250ms linear, background-color 250ms linear;
  :hover,
  :focus {
    color: ${p => p.theme.colors.backgroundTableHead};
    background-color: ${p => p.theme.colors.white};
  }
`;

export const TableRow = styled.tr`
  background-color: ${p =>
    p.id % 2 !== 0 ? p.theme.colors.white : p.theme.colors.backgroundSecondary};
  transition: transform 250ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.primary};
    transform: scale(1.1);
  }
`;

export const Tabledata = styled.td`
  cursor: pointer;
  padding: ${p => p.theme.space[2]}px;
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
  transition: color 250ms linear, background-color 250ms linear,
    transform 250ms linear;

  :hover,
  :focus {
    transform: scale(1.1);
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.backgroundTableHead};
  }
`;
