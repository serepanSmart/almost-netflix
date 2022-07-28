import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import banner from '@public/banner.webp';

const Banner = styled.div`
  position: relative;
  min-height: 396px;
  margin-bottom: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: url(${banner.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: rgba(0,0,0, 0.8);
  }
  * {
    position: relative;
    z-index: 1;
  }
`;

const CenteredRow = styled(Row) <{
  reduceSpacer?: boolean;
  justify?: boolean;
}>`
  position: relative;
  flex-wrap: nowrap;
  justify-content: ${({ justify }) => justify ? 'flex-start' : 'space-between'};
  margin: 0 0 ${({ reduceSpacer }) => reduceSpacer ? '30px' : '75px'};
`;

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Banner, CenteredRow, SearchForm };