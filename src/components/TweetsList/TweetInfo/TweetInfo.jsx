import { Avatar, Card } from './TweetInfo.styled';

export const TweetInfo = ({ info }) => {
  return (
    <Card>
      <Avatar src={info.avatar} width="62" height="62" alt="avatar" />
    </Card>
  );
};
