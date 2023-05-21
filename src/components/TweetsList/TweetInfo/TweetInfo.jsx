import { lsFollowers } from 'services/storage';
import { Avatar, Button, Card, Followers, Tweets } from './TweetInfo.styled';

export const TweetInfo = ({ info, onClick }) => {
  const handleClick = () => {
    if (info.isFollowing) {
      lsFollowers.unset(info.id);
    } else {
      lsFollowers.set(info.id);
    }
    onClick();
  };

  return (
    <Card>
      <Avatar src={info.avatar} width="62" height="62" alt="avatar" />
      <Tweets>{info.tweets} tweets</Tweets>
      <Followers>
        {new Intl.NumberFormat('en-US').format(info.followers)} followers
      </Followers>
      <Button onClick={handleClick} isFollowing={info.isFollowing}>
        {info.isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};
