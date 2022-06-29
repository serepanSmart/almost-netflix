import { useState, useEffect } from 'react';
import Wrapper from './styles';
import ErrorImg from '@/assets/eddie.gif';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const [timer, setTimer] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => --prev);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <Wrapper>
      <h1>404 - PAGE NOT FOUND</h1>
      <h1>Redirection to main page in {timer} seconds</h1>
      <img src={ErrorImg} alt="page 404 - Not Found" />
    </Wrapper>
  );
};

export default NotFound;
