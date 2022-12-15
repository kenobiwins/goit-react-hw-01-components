import styled from 'styled-components';

export const StatisticsSection = styled.section`
  //  width:100%;
`;

export const StatisticsTitle = styled.h2`
  color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  text-align: center;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  flex-basis: 25%;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => {
    switch (p.id) {
      case 0:
        return 'orange';
      case 1:
        return 'blue';
      case 2:
        return 'red';
      case 3:
        return 'brown';
      default:
        return 'white';
    }
  }};
`;
