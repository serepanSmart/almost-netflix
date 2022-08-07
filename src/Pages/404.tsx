import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Wrapper from './styles';
import { imgPlaceholder } from '@/utils';

const NotFound: React.FC = () => {
  const [src, setSrc] = useState(
    // eslint-disable-next-line max-len
    'https://thumbs.gfycat.com/ForthrightAromaticIcterinewarbler-size_restricted.gif',
  );
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
      <Image
        src={src}
        alt='page 404 - Not Found'
        onError={() => setSrc(imgPlaceholder)}
        width={600}
        height={600}
        max-width='100%'
        quality={100}
        layout='fixed'
        objectFit='cover'
        objectPosition='0 0'
        priority
      />
    </Wrapper>
  );
};

export default NotFound;
