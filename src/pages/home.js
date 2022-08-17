import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { device } from 'helpers/device';

export default function Home() {
    return (
        <Main>
            <Article>
                <header>
                    <h1>
                        <small className="h5">So, you want to travel to</small> <strong>Space</strong>
                    </h1>
                </header>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </Article> 

            <Section id="explore">
                <Link to="/destinations">
                    Explore
                </Link>
            </Section>
        </Main>
    );
}

const Main = styled.main`
    display: grid;
    padding-inline: 10px;
    grid-template-columns: minmax(14rem, 20.4375rem);
    row-gap: 2rem;
    justify-content: center;
    justify-items: center;
    padding-block-end: 4rem;
    @media ${device.tablet} {
        padding-inline: unset;
        grid-template-columns: 1fr;
        grid-template-rows: 0.625rem;
        justify-items: center;
    }
    @media ${device.desktop} {
        grid-template-columns: auto 28.125rem auto 28.125rem auto;
        grid-template-rows: 9.7rem auto;
        justify-content: initial;
    }
`;
const Article = styled.article`
    grid-row-start: 1;
    & h1 {
        text-transform: uppercase;
        & strong {
            color: var(--main-white);
            font-weight: 400;
        }
    }
    @media ${device.tablet} {
        width: 450px;
        text-align: center;
        grid-row-start: 2;
    }
    @media ${device.desktop} {
        height: 400px;
        grid-column-start: 2;
        grid-row-start: 2;
        text-align: start;
    }
`;
const Section = styled.section`
    grid-row-start: 2;
    & a{
        display: grid;
        place-items: center;
        width: 9.375rem;
        height: 9.375rem;
        color: var(--main-dark);
        font-family: 'Bellefair', serif;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 50%;
        background-color: var(--main-white);
    }
    @media ${device.tablet} {
        grid-row-start: 3;
        & a {
            width: 15.125rem;
            height: 15.125rem;
            font-size: 2rem;
            letter-spacing: 2px;
        }
    }
    @media ${device.desktop} {
        grid-column-start: 4;
        grid-row-start: 2;
        align-self: end;
        & a {
            transition: background-color 0.5s cubic-bezier(0.28, 0.14, 0, 0.4);
            position: relative;
            width: 17.125rem;
            height: 17.125rem;
            &::after {
                content: '';
                position: absolute;
                width: 17.125rem;
                height: 17.125rem;
                box-shadow: inset 0px 17.125rem var(--main-dark);
                -moz-box-shadow: inset 0px 17.125rem var(--main-dark), inset 0px 17.125rem 1px 1px var(--main-dark);
                transform: rotate(90deg);
                border-radius: 50%;
                opacity:0;
            }
            &:hover::after {
                animation-duration: .80s;
                animation-name: eclipse-expansion;
                animation-fill-mode: forwards;
            }
            @keyframes eclipse-expansion{
                60% {
                    box-shadow: inset 0px 0px #000; 
                    opacity: 0.136;
                    border: 0px solid rgba(255, 255, 255, 0.136);
                }
                100% {
                    box-shadow: inset 0px 0px #000; 
                    border: 80px solid rgba(255, 255, 255, 0.136);
                    opacity: 1;
                }
            }
        }
    }
`;


