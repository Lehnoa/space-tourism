import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from 'assets/shared/logo.svg';
import { device } from 'helpers/device';

export default function Logo () {
    return(
        <StyledLink to='/'>
            <img src={ logo } alt='logo' />
        </StyledLink>
    );
}

const StyledLink = styled(Link)`
    position: absolute;
    top: 1rem;
    left: 1rem;
    & img {
        width: 40px;
    }
    @media ${device.tablet} {   
        top: 1.5rem;
        left: 3rem;
        & img {
            width: 48px;
        }
    }
    @media ${device.desktop} {
        top: 4rem;
        left: 3rem;
    }
`;