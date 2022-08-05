import styled from 'styled-components/macro';
import { device, size } from 'helpers/device';

//common page-type style
export const Page = styled.main`
  z-index: 100;
  position: relative;
  & header {
    padding-block: 2rem;
   & h5 {
      color: var(--main-white);
      & span {
        opacity: 25%;
        font-weight: bold;
      }
    }
  }
  & div {
     display: grid;  
     & img {
          grid-area: img;
      }
      & nav {
          grid-area: menu;
      }
      & section {
          grid-area: section;
      }
  }
  @media (max-width: calc( ${ size.desktop } - 1px )) {
    & div {
      & > * {
        grid-column-start: 2;
      }
    }
  }
  @media ${device.tablet} {
    padding-inline: 2.375rem;  
    & header {
      text-align: left;
      padding-block: 3.3125rem;
    }
  }
  @media ${device.desktop} {
    padding-inline-start: 10rem;
    padding-block-start: 2.75rem;
    & div {
      justify-items: start;
      text-align: left;
    }
  }  
`;