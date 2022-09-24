import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  InfoText,
  NameText,
  Avatar,
  StatsList,
  StatsItem,
  StatsEl,
  StatsElNumber,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <NameText>{username}</NameText>
        <InfoText>@{tag}</InfoText>
        <InfoText>{location}</InfoText>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsEl>Followers</StatsEl>
          <StatsElNumber>{stats.followers}</StatsElNumber>
        </StatsItem>
        <StatsItem>
          <StatsEl>Views</StatsEl>
          <StatsElNumber>{stats.views}</StatsElNumber>
        </StatsItem>
        <StatsItem>
          <StatsEl>Likes</StatsEl>
          <StatsElNumber>{stats.likes}</StatsElNumber>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
