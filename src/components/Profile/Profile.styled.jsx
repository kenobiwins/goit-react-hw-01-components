import styled from 'styled-components';

export const ProfileCard = styled.div`
  // max-width:300px;
  box-shadow: 2px 2px 6px 0px rgba(97, 90, 90, 0.66);
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.background};

  img {
    width: 100%;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const ProfileDescriptionInfo = styled.p`
  font-size: ${p => (p.username ? p.theme.fontSizes.m : p.theme.fontSizes.s)};
  font-weight: ${p =>
    p.username ? p.theme.fontWeights.bold : p.theme.fontWeights.normal};
  color: ${p => (p.username ? p.theme.colors.black : p.theme.colors.text)};
`;

// ===========================================
export const ProfileStatsList = styled.ul`
  display: flex;
  text-align: center;
  background-color: ${p => p.theme.colors.backgroundSecondary};
  border-top: ${p => p.theme.borders.normal};

  color: ${p => p.theme.colors.borderColor};
`;

export const ProfileStatsInfo = styled.li`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  flex-basis: 33%;

  & + & {
    border-left: ${p => p.theme.borders.normal};
  }
`;

export const Chip = styled.span`
  color: ${p =>
    typeof p.children === 'number'
      ? p.theme.colors.black
      : p.theme.colors.text};
  font-weight: ${p =>
    typeof p.children === 'number'
      ? p.theme.fontWeights.bold
      : p.theme.fontWeights.normal};
`;
