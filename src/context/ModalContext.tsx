import React, {
  useState,
  createContext,
  FunctionComponent,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { IMovie } from '@/service';
import { API } from '@/constants';
import { showAlert } from '@/redux/actions';
import { useDispatch } from '@/redux/store';
import { ChildrenProps } from '@/types';
import { useRouter } from 'next/router';

interface IModalProps {
  onRequestClose?: () => void;
  onSubmit?: (data: IMovie) => void;
  deleteMovieHandler?: (id: number | string) => void;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>, ...args) => void;
  openModalHandler: (...args) => void;
  isModalOpened: boolean;
  isDeleting?: boolean;
  modalTitle: string;
  movie: IMovie;
  setMovie: Dispatch<SetStateAction<IMovie>>;
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

  const dispatch = useDispatch();

  const router = useRouter();

  // JUST HANDLE OPEN-CLOSE MODAL
  const onRequestClose = useCallback(() => {
    setIsModalOpened(!isModalOpened);
  }, [isModalOpened]);

  // DELETE MOVIE, WITHOUT FORM SUBMIT HANDLER
  const deleteMovieHandler = useCallback(
    async (id: number | string) => {
      return fetch(`${API}/${id}`, {
        method: submitMethod,
      })
        .then(() => {
          router.push(router.asPath); // WITH THIS SAVED PARAM WE CAN SEE THE SAME SCREEN AFTER NEW FETCHING
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
    [dispatch, router, submitMethod],
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
    async (data: IMovie) => {
      const res = await fetch(API, {
        method: submitMethod,
        body: JSON.stringify(data),
        headers: headers,
      });
      if (res.ok) {
        router.push(router.asPath); // WITH THIS SAVED PARAM WE CAN SEE THE SAME SCREEN AFTER NEW FETCHING
        onRequestClose();
        setTimeout(() => {
          dispatch(showAlert('Congrats', 'Movie data is updated', 'success'));
        }, 350);
      } else {
        dispatch(showAlert('Error', 'Ooops, something went wrong'));
      }
    },
    [dispatch, onRequestClose, router, submitMethod],
  );

  const value = React.useMemo<IModalProps>(
    () => ({
      isModalOpened,
      openModalHandler,
      modalTitle,
      onRequestClose,
      movie,
      setMovie,
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
