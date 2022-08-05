import { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import burger from 'assets/shared/icon-hamburger.svg';
import close from 'assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';


export default function BurgerMenu({MenuItems}) {
     const [menuOpen, setMenuOpen] = useState(false);
     //close menu when clicking an item
     const handleClick = () =>{
        setMenuOpen(false);
     };

    return(
        <Menu 
            isOpen={ menuOpen }
            onStateChange={({isOpen}) => setMenuOpen(isOpen)}
            right 
            width={ '254px' } 
            customBurgerIcon={ <img src={ burger } alt='menu-open' /> }
            customCrossIcon={ <img src={ close } alt='menu-close' /> }
            styles={ styles }
        >
            { MenuItems.map((item, index) => 
                <Link to={ item.to } onClick={ () => handleClick() } key={ index }><strong>{ item.prefix }</strong>  { item.title }</Link>
            )}
        </Menu>
    );
}

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '24px',
        right: '1rem',
        top: '1.2rem'
      },
      bmCrossButton: {
        width: '19px',
        height: '19px',
        right: '1rem',
        top: '1.2rem'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: '0'
      },
      bmMenu: {
        padding: '2.5em 1.5em 0',
        backdropFilter:' blur(28px)',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        right: '0',
        textAlign: 'start'
      },
      bmMorphShape: {
        fill: 'rgba(255, 255, 255, 0.04)'
      },
      bmItemList: {
        height:'auto',
        width: '254px',
        padding: '0.8em',
        marginBlockStart: '3rem'
      },
      bmItem: {
        display: 'block',
        color: 'var(--main-white)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        marginBlockEnd: '2rem'  
      },
      bmOverlay: {
        background: 'none'
      }
}