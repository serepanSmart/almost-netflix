import { createGlobalStyle } from 'styled-components';
import MontserratBold from './Montserrat-Bold.ttf';
import MontserratLight from './Montserrat-Light.ttf';
import MontserratMedium from './Montserrat-Medium.ttf';
import MontserratRegular from './Montserrat-Regular.ttf';
import MontserratSemiBold from './Montserrat-SemiBold.ttf';

const Fonts = createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${MontserratLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${MontserratRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${MontserratMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${MontserratSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'),
    url(${MontserratBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
`;

export default Fonts;