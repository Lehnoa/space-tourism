import { useState } from 'react';
import styled from 'styled-components/macro';
import { useMediaQuery } from 'react-responsive';
import { device } from 'helpers/device';

export default function TabMenu({pageType, menuItems, handle}) {
    const [selectedItem, setSelectedItem] = useState(0);
    const isTabletOrDesktop = useMediaQuery({ query: `${device.tablet}` });

    function MenuItems () {
        return menuItems.map((item, index) =>
         (<li key={index} className={(index === selectedItem ? "active" : "")}>
            <a href='/' className={isTabletOrDesktop ? 'nav-text' : 'subheading1'} onClick={(e) => {handle(pageType, item); setSelectedItem(index); e.preventDefault();}}>
                {item}
            </a>
         </li>));
    }
    return (
        <Nav role='navigation' aria-labelledby='tab-menu'>
            <h2 id='tab-menu' className='hidden'>{pageType} Menu</h2>
            <ul>
                <MenuItems />
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    & ul {
        display: inline-grid;
        grid-template-columns: repeat(4, auto);
        grid-template-rows: 28px;
        column-gap: 27px;
        & li {
            width: fit-content;
            &.active {
                border-bottom: 3px solid var(--main-white);
                & .nav-text {
                    color: var(--main-white);
                }
            }
            & .nav-text {
                color: var(--main-light);
            }
            &:hover {
                border-bottom: 3px solid rgba(255, 255, 255, 0.5);
            }
        }
    } 
    @media ${device.tablet} {
        & ul {
            grid-template-rows: 34px;
            column-gap: 36px;
        }
    } 
    @media ${device.desktop} {
        & ul {
            grid-template-rows: 34px;
            column-gap: 36px;
        }
    } 
`;
