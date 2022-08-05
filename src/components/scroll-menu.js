import { useState } from 'react';
import styled from 'styled-components/macro';
import { device } from 'helpers/device';

export default function ScrollMenu({pageType, menuItems, handle}) {
    const [selectedItem, setSelectedItem] = useState(0);

    function MenuItems () {
        return menuItems.map((item, index) =>
         (<li key={index} className={(index === selectedItem ? "active" : "")}>
            <a href='/' className='h4' onClick={(e) => {handle(pageType, item); setSelectedItem(index); e.preventDefault();}}>{index + 1}
            </a>
        </li>));
    }

    return (
        <Nav role='navigation' aria-labelledby='scroll-menu'>
            <h2 id='scroll-menu' className='hidden'>{ pageType } Menu</h2>
            <ul>
                <MenuItems />
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    & ul {
        display: inline-grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        & li {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            color: var(--main-white);
            padding-block-start: 20%;
            &:hover {
                    border: 1px solid var(--main-white);
            }
            & a {
                color: var(--main-white);
            }
        }
        & li.active {
            background-color: var(--main-white);
            & a {
                color: var(--main-dark);
            }
        }
    }
    @media ${device.tablet} {
        & ul {
            & li {
                width: 58px;
                height: 58px;
                padding-block-start: 27%;
            }
        }
    }
    @media ${device.desktop} {
        & ul {
            display: grid;
            grid-template-columns: unset;
            grid-template-rows: repeat(3, 1fr);
            column-gap: unset;
            row-gap: 32px; 
            & li {
                width: 80px;
                height: 80px;
                text-align: center;
            }
        }
    }
`;