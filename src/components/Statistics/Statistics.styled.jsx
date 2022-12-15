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
  background-color: ${p => p.color};
`;
// background-color: ${p => {
//   switch (p.id) {
//     case 'id-1':
//       return 'orange';
//     case 'id-2':
//       return 'blue';
//     case 'id-3':
//       return 'red';
//     case 'id-4':
//       return 'brown';
//     default:
//       return 'white';
//   }
// }};
