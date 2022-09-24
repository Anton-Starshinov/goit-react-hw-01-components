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
          <StatsEl class="label">Followers</StatsEl>
          <StatsElNumber class="quantity">{stats.followers}</StatsElNumber>
        </StatsItem>
        <StatsItem>
          <StatsEl class="label">Views</StatsEl>
          <StatsElNumber class="quantity">{stats.views}</StatsElNumber>
        </StatsItem>
        <StatsItem>
          <StatsEl class="label">Likes</StatsEl>
          <StatsElNumber class="quantity">{stats.likes}</StatsElNumber>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};
