import { Helmet } from 'react-helmet';
import useJsonData from 'hooks/use-json-data';
import SlideMenu from 'components/slide-menu';
import styled from 'styled-components/macro';
import JsonData from 'data.json';
import { device } from 'helpers/device';
import { Page } from 'components/page'

export default function Crew(){
    const [crew, handle] = useJsonData('crew', 'Douglas Hurley');
    const crewNames = JsonData['crew'].map(c => {return c.name});

    return(
        <Page>
          <Helmet>
            <title>Space Tourism - Crew</title>
            <meta name="description" content="Meet Our Crew Members"/>
            <meta name="keywords" content={crewNames.join(", ")}/>
          </Helmet>
            <header>
                <h5><span>02</span> MEET YOUR CREW</h5>
            </header>
            <Div>
                <SlideMenu pageType='crew' menuItems={crewNames} handle={handle} />
                <Img
                    src={require('../' + crew.images.webp)}
                    alt={crew.name}
                />
                <hr />
                <Section>
                    <h3>
                        <span className='h4'>{crew.role}</span> 
                        {crew.name}
                    </h3>
                    <p>{crew.bio}</p>               
                </Section> 
            </Div>
        </Page>
    );
} 

const Div = styled.div`
    grid-template-columns: 10px 86vw 10px;
    grid-template-areas: 
    ". img ."
    ". hr ." 
    ". menu ."
    ". section ."; 
    --grid-gap: 10px;
    row-gap: var(--grid-gap);
    justify-items: center;
    justify-content: center;
    & hr {
        grid-area: hr;
        width: 100%;
        margin: 0;
        background-color: #383B4B;
        height: 1px;
        margin-block-start: calc(0px - var(--grid-gap));
        z-index: 10;
    }
  @media ${device.tablet} {
    & > * {
        grid-column-start: 2;
    }
    padding-inline: unset;
    grid-template-columns: 8px minmax(200px, 450px) 8px;
    justify-items: center;
    row-gap: 1rem;
    grid-template-areas: 
    ". section ." 
    ". menu ."
    ". img .";
    & hr {
        display: none;
    }
    & menu {
        grid-row-start: 2;
    }
    & img {
        grid-column-start: 2;
        grid-row-start: 3;
    }
    & section {
        grid-row-start: 1;   
        & h3 {
            white-space: nowrap;
            & span {
                margin-block-end: 10px;
            }
        }
    }
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 130px 310px 30px;
    grid-template-areas: 
      ".       img"
      "section img" 
      "menu    img";
    column-gap: 40px;
    row-gap: 20px;
    justify-content: initial;
  }
`;
const Img = styled.img`
  height: 223px;  
  @media ${ device.tablet }{
    margin-block-start: 20px;
    height: 532px;
  }
  @media ${ device.desktop }{
    margin-block-start: -20px;
    height: unset;
  }
`;
const Section = styled.section`
  & span.h4 {
    display: block;
    opacity: 50%;
  }  
  @media ${ device.tablet }{
    /* We want a constant height for the section so that our slide-menu stays fixed when switching between crew members. 
       The height needs to decrease as the viewport width increases so the space between the section and the menu
       stays relatively the same for different display sizes */
    height: calc(((1px - (100vw/1280)) * 13) + 210px); 
    & p {
        margin-block-end: 0;
    }
  }
  @media ${ device.desktop }{
    height: 330px;
    & p {
        max-width: 31vw;
    }
  }
`;
