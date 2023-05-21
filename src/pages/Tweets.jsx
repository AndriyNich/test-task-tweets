import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Wrapper } from 'components/Wraper/Wraper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchTweets } from 'services/api';

const Status = {
  IDLE: 'idle',
  LOAD: 'load',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const toastParams = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const Tweets = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [vissiblePagination, setVissiblePagination] = useState(true);
  const navigate = useNavigate();

  const handleMore = () => {
    setPage(prev => {
      if (prev + 1 === 4) {
        setVissiblePagination(false);
      }
      return prev + 1;
    });
  };

  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch(page, abortController) {
      setStatus(Status.LOAD);
      try {
        const fetchData = await fetchTweets(page, abortController);
        setData(prev => {
          if (page === 1) {
            return fetchData;
          } else {
            return [...prev, ...fetchData];
          }
        });
        setStatus(Status.RESOLVED);
      } catch (err) {
        toast.error(err, toastParams);
      }
    }

    fetch(page, abortController);
  }, [page]);

  return (
    <>
      <TweetsList data={data} />
      {status === Status.LOAD && <Loader />}
      {status !== Status.LOAD && status !== Status.IDLE && (
        <Wrapper>
          {vissiblePagination && (
            <Button onClick={handleMore}>Load more</Button>
          )}
          <Button onClick={handleHome}>Back to HOME</Button>
        </Wrapper>
      )}
      <ToastContainer />
    </>
  );
};

export default Tweets;
