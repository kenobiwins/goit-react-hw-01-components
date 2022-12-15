import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileDescriptionInfo,
  ProfileStatsList,
  ProfileStatsInfo,
  Chip,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  stats: { likes, views, followers },
  avatar,
}) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <img src={avatar} alt={`${username} avatar`} />
        <ProfileDescriptionInfo username>{username}</ProfileDescriptionInfo>
        <ProfileDescriptionInfo>{`@${tag}`}</ProfileDescriptionInfo>
        <ProfileDescriptionInfo>{location}</ProfileDescriptionInfo>
      </ProfileDescription>

      <ProfileStatsList>
        <ProfileStatsInfo>
          <Chip>Followers</Chip>
          <Chip>{followers}</Chip>
        </ProfileStatsInfo>
        <ProfileStatsInfo>
          <Chip>Views</Chip>
          <Chip>{views}</Chip>
        </ProfileStatsInfo>
        <ProfileStatsInfo>
          <Chip>Likes</Chip>
          <Chip>{likes}</Chip>
        </ProfileStatsInfo>
      </ProfileStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
