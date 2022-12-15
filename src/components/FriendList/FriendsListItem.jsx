import { FriendsItemStyled, Status } from './FriendsListItem.styled';
import { RiRadioButtonLine } from 'react-icons/ri';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItemStyled>
      <Status checkOnline={isOnline}>
        <RiRadioButtonLine />
        {isOnline ? 'online' : 'offline'}
      </Status>
      <img src={avatar} alt={`${name} avatar`} width="48px" />
      <p>{name}</p>
    </FriendsItemStyled>
  );
};
