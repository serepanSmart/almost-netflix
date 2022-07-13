import React from 'react';
import { RootState } from '@/redux/rootReducer';
import { useSelector } from 'react-redux';
import { useDispatch } from '@/redux/store';
import {
  showAlert,
  showLoader,
  hideAlert,
  hideLoader,
  fetchMovies,
} from '@/redux/actions';
import { Alert, Loader } from '@/UI';

const TestRedux: React.FC = () => {
  const [movie, setMovie] = React.useState(null);
  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => {
    return state.app.loading;
  });

  const alert = useSelector((state: RootState) => {
    return state.app.alert;
  });

  const getMovies = (): void => setMovie(dispatch(fetchMovies()));

  return (
    <>
      {loading && <Loader data-testid='loader' />}
      {alert && (
        <Alert type={alert.type} title={alert.title} message={alert.message} />
      )}
      <button onClick={() => dispatch(showLoader())}>Show Loader</button>
      <button onClick={() => dispatch(hideLoader())}>Hide Loader</button>
      <button
        onClick={() => dispatch(showAlert('Error Title', 'Error Message'))}
      >
        Show Alert
      </button>
      <button onClick={() => dispatch(hideAlert())}>Hide Alert</button>
      <button onClick={getMovies}>Get Movies</button>
      {movie && <li>Voila!</li>}
    </>
  );
};

export default TestRedux;
