import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Wrapper from './styles';

const NotFound: React.FC = () => {
  const [timer, setTimer] = useState<number>(5);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => --prev);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <Wrapper>
      <h1>404 - PAGE NOT FOUND</h1>
      <h1>Redirection to main page in {timer} seconds</h1>
      <img
        // eslint-disable-next-line max-len
        src='https://thumbs.gfycat.com/ForthrightAromaticIcterinewarbler-size_restricted.gif'
        alt='page 404 - Not Found'
      />
    </Wrapper>
  );
};

export default NotFound;
