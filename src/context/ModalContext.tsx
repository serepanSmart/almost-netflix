import React, {
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
  FormEvent,
} from 'react';
import { IMovie } from '@/service';
import { URL } from '@/constants';
import { useDispatch } from 'react-redux';
import { fetchMovies, showAlert } from '@/redux/actions';
import { ChildrenProps } from '@/types';
import { useMoviesContext } from './MoviesContext';

interface IModalProps {
  onRequestClose?: () => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>, data: IMovie) => void;
  deleteMovieHandler?: (id: number | string) => void;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>, ...args) => void;
  openModalHandler: (...args) => void;
  isModalOpened: boolean;
  isDeleting?: boolean;
  modalTitle: string;
  movie: IMovie;
  submitMethod: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const headers: Record<string, string | undefined> = {
  'Content-Type': 'application/json',
};

const ModalContext = createContext<IModalProps | null>(null);

const ModalContextProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [movie, setMovie] = useState<IMovie>();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [submitMethod, setSubmitMethod] = useState(undefined);

  const { query } = useMoviesContext();

  // JUST HANDLE OPEN-CLOSE MODAL
  const onRequestClose = useCallback(() => {
    setIsModalOpened(!isModalOpened);
  }, [isModalOpened]);

  // DELETE MOVIE, WITHOUT FORM SUBMIT HANDLER
  const dispatch = useDispatch();

  const deleteMovieHandler = useCallback(
    async (id: number | string) => {
      return fetch(`${URL}/${id}`, {
        method: submitMethod,
      })
        .then(() => {
          dispatch(fetchMovies(query)); // WITH THIS SAVED PARAM WE CAN SEE THE SAME SCREEN AFTER NEW FETCHING
        })
        .then(() => {
          setTimeout(() => {
            dispatch(
              showAlert(
                'Congratulations',
                'Movie is successfully removed',
                'success',
              ),
            );
          }, 350);
        })
        .catch(() => {
          dispatch(showAlert('Oops', 'Something went wrong'));
        });
    },
    [dispatch, query, submitMethod],
  );

  // OPEN MODAL WITH PARAMS
  const openModalHandler = useCallback(
    (
      modalTitle: string,
      submitMethod = 'POST',
      data: IMovie,
      isDeleting: boolean,
    ) => {
      onRequestClose();
      setModalTitle(modalTitle);
      setSubmitMethod(submitMethod);
      setMovie(data);
      setIsDeleting(isDeleting);
    },
    [onRequestClose],
  );

  // CHANGE INPUT HANDLERS
  const setMovieData = (values): void => {
    setMovie((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type } = e.currentTarget;
      if (type === 'number') {
        setMovieData({ [e.target.name]: +value });
      } else {
        setMovieData({ [e.target.name]: value });
      }
    },
    [],
  );

  // HANDLE FORM SUBMITTING
  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>, data: IMovie) => {
      e.preventDefault();
      const res = await fetch(URL, {
        method: submitMethod,
        body: JSON.stringify(data),
        headers: headers,
      });
      if (res.ok) {
        dispatch(fetchMovies(query));           // WITH THIS SAVED PARAM WE CAN SEE THE SAME SCREEN AFTER NEW FETCHING
        onRequestClose();
        setTimeout(() => {
          dispatch(showAlert('Congrats', 'Movie data is updated', 'success'));
        }, 350);
      } else {
        dispatch(showAlert('Error', 'Fill all reqiured fields (*)'));
      }
    },
    [dispatch, onRequestClose, query, submitMethod],
  );

  const value = React.useMemo<IModalProps>(
    () => ({
      isModalOpened,
      openModalHandler,
      modalTitle,
      onRequestClose,
      movie,
      handleInputChange,
      deleteMovieHandler,
      isDeleting,
      onSubmit,
      submitMethod,
    }),
    [
      isModalOpened,
      openModalHandler,
      modalTitle,
      onRequestClose,
      movie,
      handleInputChange,
      deleteMovieHandler,
      isDeleting,
      onSubmit,
      submitMethod,
    ],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModalContext = (): IModalProps => {
  const value = useContext(ModalContext);
  if (!value) {
    throw new Error('TEST ERROR FOR MOVIES CONTEXT IF SOMETHING GOES WRONG');
  }
  return value;
};

export { useModalContext, ModalContextProvider };
export type { IModalProps };
