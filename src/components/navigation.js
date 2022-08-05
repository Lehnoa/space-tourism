import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import BurgerMenu from './burger-menu';
import { useMediaQuery } from 'react-responsive';
import { device } from 'helpers/device';

export default function Navigation () {
    //create item list for use in the nav menu
    const MenuItems = [
        {
          to: "/",
          prefix: "00",
          title: "Home",
        },
        {
          to: "/destinations",
          prefix: "01",
          title: "Destination",
        },
        {
          to: "/crew",
          prefix: "02",
          title: "Crew",
        },
        {
          to: "/technology",
          prefix: "03",
          title: "Technology",
        }
    ];

    const isTabletOrDesktop = useMediaQuery({ query: `${device.tablet}` });

    return (
        <Nav role='navigation' aria-labelledby='main-menu'>
            <h2 id='main-menu' className='hidden'>Main Menu</h2>
            <hr className="line" aria-hidden='true' />
            { /* display burger menu for mobile */ }
            { !isTabletOrDesktop  && <BurgerMenu MenuItems={ MenuItems } /> }
            { isTabletOrDesktop && 
            <ul>
                { MenuItems.map((item, index) => 
                    <li key={index}>
                        <NavLink to={ item.to } className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-text"}>
                            <span>{ item.prefix }</span>  { item.title }
                        </NavLink>
                    </li>
                )}
            </ul> }
        </Nav>
    );
}

const Nav = styled.nav`
    letter-spacing: 2.7px;
    & .line {
        display: none;
    }
    & ul a{
        color: var(--main-white);
    }
    @media ${device.tablet}{
        width: 60%;
        height: 96px;
        letter-spacing: 2.36px;
        margin-inline-start: auto;
        & ul {
            height: inherit;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            align-items: center;
            backdrop-filter: blur(28px);
            background-color: rgba(255, 255, 255, 0.04); 
            padding-inline-end: 10px;
            & a {               
                &.nav-text{
                    font-size: 0.875rem;
                    letter-spacing: 2.36px;
                }
                &.link-active{
                    border-bottom: 3px solid white;
                    padding-block-end: 35px;
                }
                &:hover {
                    border-bottom: 3px solid rgba(225, 225, 225, 0.5);
                    padding-block-end: 35px;
                }
                & span {
                    display: none;
                }
            }
        }
    }
    @media ${device.desktop} {
        display: grid;
        width: 100%;
        padding-inline-start: 125px;
        align-items: center;
        grid-template-columns: 1fr 2fr;
        & .line {
            width: 112%;
            padding-inline-start: 165px;
            display: inline-block;
            border: 1px solid rgba(255,255,255,0.25);
            grid-column: 1/2;
            grid-row: 1/2;
            z-index: 100;
        }
        & ul {
            grid-column: 2/3;
            grid-row: 1/2;
            grid-template-columns: [space] 7rem [start] repeat(4,auto) [end] auto;
            margin-inline-start: 17px;
            & li {
                padding-inline: 10px;
                justify-self: start;
                &:first-child {
                    grid-column-start: start;
                }
                & a {
                    &.nav-text {
                        font-size: 1rem;
                        letter-spacing: 2.7px;
                    }
                    & span {
                        display: inline-block;
                        font-weight: bold;
                    }               
                }
            }
        }
    }
`;

