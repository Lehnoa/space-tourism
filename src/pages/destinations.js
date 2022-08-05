import { Helmet } from 'react-helmet';
import useJasonData from 'hooks/use-json-data';
import TabMenu from 'components/tab-menu';
import styled from 'styled-components/macro';
import JsonData from 'data.json';
import { device } from 'helpers/device';
import { Page } from 'components/page'


export default function Destinations() {
    const [destination, handle] = useJasonData('destinations', 'Moon');
    const destinationNames = JsonData['destinations'].map(d => {return d.name});

  return (
    <Main>
      <Helmet>
        <title>Space Tourism - Destinations</title>
        <meta name="description" content="Explore Our Destinations"/>
        <meta name="keywords" content={destinationNames.join(", ")}/>
      </Helmet>
      <header>
        <h5>
          <span>01</span>   PICK YOUR DESTINATION
        </h5>
      </header>
      <Div>
        <TabMenu pageType='destinations' menuItems={destinationNames} handle={handle} />
        <Img
          src={ require('../' + destination.images.webp) }
          alt= { destination.name }
        />     
        <Section>
          <h2>{ destination.name }</h2>
          <p>{ destination.description }</p>
        </Section>
        <Footer>
          <hr />
          <dl>
            <dt className='subheading1'>AVG. DISTANCE</dt>
            <dd>{destination.distance}</dd>
            <dt className='subheading1'>EST. TRAVEL TIME</dt>
            <dd>{destination.travel}</dd>
          </dl>
        </Footer>
      </Div>
    </Main>
  );
}

const Main = styled(Page)`
  @media ${device.desktop} {
    padding-block-end: 4.75rem;
    padding-inline-end: 10rem;
  }
`;
const Div = styled.div`
  grid-template-columns: auto 86vw auto;
  grid-template-rows: repeat(4, auto);
  grid-template-areas: 
    ". img ." 
    ". menu ."
    ". section ."
    ". footer ."; 
  row-gap: 2rem;
  justify-items: center;
  justify-content: center;
  padding-inline: 15px;
  @media ${device.tablet} {
    padding-inline: unset;
    grid-template-columns: auto 72vw auto;
    justify-items: center;
    row-gap:3.3125rem;
  }
  @media ${device.desktop} {
    padding-block-start: 4rem;
    padding-inline-start: 4rem;
    grid-template-columns: repeat(2, 445px);
    grid-template-rows: initial;
    grid-template-areas: 
      "img  menu" 
      "img  section"
      "img  footer"; 
    column-gap: 166px;
    row-gap: 20px;
    justify-content: space-evenly;
    & nav {
      grid-column-start: 2;
      grid-row-start: 1;
    }
  }
`;
const Img = styled.img`
  width: 170px;
  height: 170px;
  grid-row-start: 1;
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.desktop} {
    grid-column-start: 1;
    width: 445px;
    height: 445px;     
  }
`;
const Section = styled.section`
  grid-row-start: 3;
  @media ${ device.desktop } {
    grid-column-start: 2;
    grid-row-start: 2;
  }
`;
const Footer = styled.footer`
  width: 100%;
  grid-area: footer;
  grid-row-start: 4;
  margin-block-start: -1.5rem;
  & dl {
    display: grid;
    grid-template-rows: repeat(2, auto) 20px repeat(2, auto);
    grid-template-areas: 
    "dt1"
    "dd1" 
    "." 
    "dt2" 
    "dd2";
    & dt {
      &:nth-of-type(1) {
        grid-area: dt1;
      }
      &:nth-of-type(2) {
        grid-area: dt2;
      }   
    }
    & dd {
      font-family: 'Bellefair', serif;
      font-size: 28px; 
      color: var(--main-white);
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      &:nth-of-type(1) {
        grid-area: dd1;
      }
      &:nth-of-type(2) {
        grid-area: dd2;
      } 
    }
  }
  @media ${ device.tablet }{
    & dl {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr); 
      grid-template-areas: unset;
      grid-auto-flow: column;
      column-gap: 4px;
      & dt {
        grid-row-start: 1;
        &:nth-of-type(n) {
          grid-area: unset;
        }
      }    
      & dd {
        grid-row-start: 2;
        &:nth-of-type(n) {
          grid-area: unset;
        }
      }
    }
  }
  @media ${ device.desktop } {
    grid-column-start: 2;
    grid-row-start: 3;
    & hr {
      width: 444px;
    }
  }
`;
