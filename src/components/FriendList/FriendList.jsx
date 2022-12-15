import { PropTypes } from 'prop-types';
import { FriendsListWrapper } from './FriendList.styled';
import { FriendsListItem } from './FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
