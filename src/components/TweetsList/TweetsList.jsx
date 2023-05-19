import { useEffect, useState } from 'react';
import { fetchTweets } from 'services/api';
import { TweetInfo } from './TweetInfo/TweetInfo';
import { CardList } from './TweetsList.styled';

export const TweetsList = ({ page }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch(page, abortController) {
      const fetchData = await fetchTweets(page, abortController);
      setData(prev => {
        if (page === 1) {
          return fetchData;
        } else {
          return [...prev, ...fetchData];
        }
      });
    }

    fetch(page, abortController);
  }, [page]);

  return (
    <CardList>
      {data.map(elem => {
        return (
          <li key={elem.id}>
            <TweetInfo info={elem} />
          </li>
        );
      })}
    </CardList>
  );
};
