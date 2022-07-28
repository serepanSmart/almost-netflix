import { FC, memo } from 'react';
import { Search } from '@styled-icons/bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { Colors } from '@/UI';
import { EXTERNAL_LINK } from '@/constants';
import { addDefaultSrc } from '@/utils';
import { IMovie } from '@/service';
import { Wrapper, Row, InfoWrapper, RatingWrapper, InfoImg } from './styles';
import { CenteredRow } from '@/containers/Header/styles';
import banner from '@public/banner.webp';
import { useRouter } from 'next/router';

const CardContainer: FC<{ movie: IMovie }> = ({ movie }) => {
  const router = useRouter();

  delete router.query.id;

  return (
    <Wrapper>
      <Image src={banner} layout='fill' />
      <CenteredRow reduceSpacer style={{ marginTop: 30 }}>
        <EXTERNAL_LINK />
        <Link
          href={{
            pathname: '/',
            query: { ...router.query },
          }}
        >
          <a>
            <Search size={25} fill={Colors.Scarlet} />
          </a>
        </Link>
      </CenteredRow>
      <Row reduceSpacer justify>
        <InfoImg
          src={movie?.['poster_path']}
          alt={movie?.title}
          onError={addDefaultSrc}
        />
        <InfoWrapper>
          <h1>
            {movie?.title}
            <RatingWrapper>{movie?.vote_average || '-'}</RatingWrapper>
          </h1>
          <p>{movie?.genres?.join(', ') || 'Genres list will be set soon'}</p>
          <h3>
            {movie?.['release_date']?.split('-')[0] ||
              'No info about release date yet'}
          </h3>
          <h3>{movie?.runtime}</h3>
          <p>{movie?.overview}</p>
        </InfoWrapper>
      </Row>
    </Wrapper>
  );
};

export default memo(CardContainer);
