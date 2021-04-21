import { useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { Alert, Spinner, DetailsCard } from '../../components';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrowLeft.svg';
import actions from '../../redux/actions/episode';
import { getEpisode } from '../../api';

export function EpisodeDetails() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const episode = useSelector((s) => s.episode.selected);

  const dispatch = useDispatch();
  const history = useHistory();
  const { episodeId } = useParams();

  // Load selected episode
  useLayoutEffect(() => {
    if (!episode) {
      const id = sessionStorage.getItem('episodeId');
      if (!episodeId && !id) {
        history.push('/');
      } else {
        const newEpisodeId = episodeId ? episodeId : id;
        getEpisode(newEpisodeId)
          .then((response) => dispatch(actions.selectedEpisode(response.data)))
          .catch((error) => {
            dispatch(actions.selectedEpisode(null));
            history.push('/404');
            setError(error.message);
          })
          .finally(() => setLoading(false));
      }
    } else {
      setLoading(false);
    }
  }, []);

  const handleAlertClose = () => {
    setError(null);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div
            onClick={() => history.push('/')}
            className="flex w-40 p-5 justify-start font-extralight cursor-pointer hover:underline text-gray-700 items-center text-sm group-hover:underline"
          >
            <ArrowIcon className="w-3 h-3 mr-2" />
            Back to the list
          </div>
          <div className="flex flex-col items-center justify-centers text-sm font-extralight min-w-max">
            <Alert error={error} onClose={handleAlertClose} />
            <DetailsCard episode={episode} />
          </div>
        </>
      )}
    </>
  );
}
