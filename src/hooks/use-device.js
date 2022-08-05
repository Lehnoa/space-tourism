import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { device } from 'helpers/device';

//returns the name of the current device type
function useDevice(){
    const isDesktop = useMediaQuery({ query: `${device.desktop}` });
    const isTablet = useMediaQuery({ query: `${device.tablet}` });

    const [deviceRes, setDeviceRes] = useState(isDesktop ? "desktop" : isTablet ? "tablet" : "mobile");
    useEffect(() => {
        setDeviceRes(isDesktop ? "desktop" : isTablet ? "tablet" : "mobile");
    }, [isDesktop, isTablet]); 

    return deviceRes;
}

export default useDevice;

