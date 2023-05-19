import { Avatar, Button, Card, Followers, Tweets } from './TweetInfo.styled';

export const TweetInfo = ({ info }) => {
  return (
    <Card>
      <Avatar src={info.avatar} width="62" height="62" alt="avatar" />
      <Tweets>{info.tweets} tweets</Tweets>
      <Followers>
        {new Intl.NumberFormat('en-US').format(info.followers)} followers
      </Followers>
      <Button
        onClick={() => {
          console.log('clicl');
        }}
      >
        Follow
      </Button>
    </Card>
  );
};
