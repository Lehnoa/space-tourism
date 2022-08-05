import { useState } from 'react';
import styled from 'styled-components/macro';
import { device } from 'helpers/device';

export default function SlideMenu({pageType, menuItems, handle}) {

    const [selectedItem, setSelectedItem] = useState(0);

    function MenuItems () {
        return menuItems.map((item, index) =>
         (<li key={index}  className={(index === selectedItem ? "active" : "")}>
            <a className='menu-item' href='/' onClick={(e) => {handle(pageType, item); setSelectedItem(index); e.preventDefault();}}>
            </a>
          </li>));
    }

    return (
        <Nav role='navigation' aria-labelledby='slide-menu'>
            <h2 id='slide-menu' className='hidden'>{ pageType } Menu</h2>
            <ul>
                <MenuItems />
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    & ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 88px;
        & li a{
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50px;
            background-color: var(--main-white);
            opacity: 17%;
            &:hover {
                opacity: 50%;
            }
        }
        & li.active a {
            opacity: 100%;
        }
    }
    @media ${device.desktop} {
        & ul {
            width: 132px;
            & li a{
                width: 15px;
                height: 15px;
            }
        }
    }
`;