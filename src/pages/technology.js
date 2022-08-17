import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import useJsonData from 'hooks/use-json-data';
import ScrollMenu from 'components/scroll-menu';
import styled from 'styled-components/macro';
import { device, size } from 'helpers/device';
import { Page } from 'components/page'
import JsonData from 'data.json';

export default function Technology(){
    const [tech, handle] = useJsonData('technology', 'Launch vehicle');
    const isMobileOrTablet = useMediaQuery({ query:  `(max-width: calc(${ size.desktop } - 1px))` });
    const isTabletOrDesktop = useMediaQuery({ query: `${ device.tablet }` });
    const techNames = JsonData['technology'].map(t => { return t.name });

    return(
        <Main>
            <Helmet>
                <title>Space Tourism - Technology</title>
                <meta name="description" content="Explore the Technology Behind Our Operation"/>
                <meta name="keywords" content={techNames.join(", ")}/>
            </Helmet>
            <header>
                <h5><span>03</span> SPACE LAUNCH 101</h5>
            </header>
            <Div>
                <ScrollMenu pageType='technology' menuItems={techNames} handle={handle} />
                { isMobileOrTablet && <Img src={require('../' + tech.images.landscape)} alt={tech.name} /> }
                { !isMobileOrTablet && <Img src={require('../' + tech.images.portrait)} alt={tech.name} /> }
                <Section>
                    <h3>
                        <small className={isTabletOrDesktop ? 'nav-text' : 'subheading1'}>THE TERMINOLOGY...</small>
                        {tech.name}
                    </h3>
                    <p>{tech.description}</p>                   
                </Section>
            </Div>
        </Main>
    );
} 

const Main = styled(Page)`   
    @media (max-width: calc( ${ size.desktop } - 1px )) {  
        padding-inline: unset;     
        & header {
            padding-inline: 2.375rem;
        }
    }
    @media ${device.desktop} {
        padding-inline-end: unset;
    }
`;
const Div = styled.div`
    grid-template-columns: repeat(3, auto);
    grid-template-areas: 
    ". img ."
    ". menu ."
    ". section .";   
    row-gap: 30px;
    @media ${device.tablet} {
        justify-items: center;
        row-gap: 4vw;
    }
    @media ${device.desktop} {
        grid-template-columns: 100px 33vw auto;
        column-gap: 40px;
        grid-template-areas:
        ".     .      img"
        "menu section img"
        ".     .      img";
    }
`;
const Img = styled.img`
    width: 100vw;
    height: 170px;
    object-fit: cover;
    /* object-position: 0 58%; */
    @media ${device.tablet} {
        height: 310px;
    }
    @media ${device.desktop} {
        width: 515px; //calc(100vw * 0.3578);
        height: 527px; //calc(100vw * 0.3659);
        justify-self: end;
        object-fit: unset;
    }
`;
const Section = styled.section`
    padding-inline: 25px;
    & h3 {
        & small {
            display: block;
            margin-block-end: 10px;
            &.nav-text {
                color: var(--main-light);
            }
        }
    }
    @media ${device.tablet} {   
        padding-inline: unset;    
        width: 56vw;       
    }
    @media ${device.desktop} {
        width: unset;
    }
`;