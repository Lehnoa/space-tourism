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
                <H4>
                    <Link to="/destinations">
                        <span>Explore</span>              
                    </Link>
                </H4>
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
    & a {
        & span {
            width: 9.375rem;
            height: 9.375rem;
            background-color: white;
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            color: var(--main-dark);
            text-transform: uppercase;
            text-decoration: none;
            padding-block: 4.2rem;
        }
    }
    @media ${device.tablet} {
        grid-row-start: 3;
        & a {
            & span {
                width: 15.125rem;
                height: 15.125rem;
                padding-block: 6.68rem;
            }
        }
    }
    @media ${device.desktop} {
        grid-column-start: 4;
        grid-row-start: 2;
        align-self: end;
        & a {
            width:28.125rem;
            height:28.125rem;
            border-radius: 50%;
            display: inline-block;
            padding-block-start: 5.5rem;
            background-color: transparent;
            transition: background-color 0.5s cubic-bezier(0.28, 0.14, 0, 0.4);
            &:hover {
                @media ${device.desktop} {
                    background-color: rgba(255, 255, 255, 0.1036);
                }
            }
            & span {
                width: 17.125rem;
                height: 17.125rem;
                padding-block: 7.68rem;
            }
        }
    }
`;
const H4 = styled.h4`
    font-family: 'Bellefair', serif;
    font-size: 1.25rem;
    letter-spacing: 1.25px;
    @media ${ device.tablet } {
        font-family: 'Bellefair', serif;
        font-size: 2rem;
        letter-spacing: 2px;
    }
`;

