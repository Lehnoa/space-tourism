import Navigation from 'components/navigation';
import Logo from 'components/logo';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return(
        <>
            <Logo />
            <Navigation />
            <Outlet />
        </>
    );
}
