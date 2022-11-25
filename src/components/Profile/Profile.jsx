import PropTypes from "prop-types";
import {
    ProfileCard,
    ProfileDescription,
    ProfileDescriptionInfo,
    ProfileStatsList,
    ProfileStatsInfo,
    Chip
} from "./Profile.styled";
export const Profile = ({user:{username,tag,location,stats:{likes,views,followers},avatar}}) => {

  return  <ProfileCard>
  <ProfileDescription >
    <img
      src={avatar}
      alt={`${username} avatar`}
    />
          <ProfileDescriptionInfo username >{ username }</ProfileDescriptionInfo>
          <ProfileDescriptionInfo >{`@${tag}` }</ProfileDescriptionInfo>
          <ProfileDescriptionInfo >{ location }</ProfileDescriptionInfo>
  </ProfileDescription>

  <ProfileStatsList >
    <ProfileStatsInfo>
      <Chip >Followers</Chip>
      <Chip >{followers}</Chip>
    </ProfileStatsInfo>
    <ProfileStatsInfo>
      <Chip >Views</Chip>
      <Chip >{views}</Chip>
    </ProfileStatsInfo>
    <ProfileStatsInfo>
      <Chip >Likes</Chip>
      <Chip >{likes}</Chip>
    </ProfileStatsInfo>
  </ProfileStatsList>
    </ProfileCard>

};

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            likes: PropTypes.number,
            views: PropTypes.number,
            followers: PropTypes.number 
        })
    })
}