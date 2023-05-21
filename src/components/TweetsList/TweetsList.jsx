import { useEffect, useState } from 'react';
import { TweetInfo } from './TweetInfo/TweetInfo';
import { CardList } from './TweetsList.styled';
import { lsFollowers } from 'services/storage';

export const TweetsList = ({ data }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets(lsFollowers.unit(data));
  }, [data]);

  const handleClick = () => {
    setTweets(lsFollowers.unit(data));
  };

  return (
    <CardList>
      {tweets.map(elem => {
        return (
          <li key={elem.id}>
            <TweetInfo info={elem} onClick={handleClick} />
          </li>
        );
      })}
    </CardList>
  );
};
