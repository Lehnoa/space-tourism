import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from 'globalStyles';
import Layout from 'components/layout';
import Home from 'pages/home';
import Destination from 'pages/destinations';
import Crew from 'pages/crew'
import Technology from 'pages/technology';
import bgData from 'background.json';
import { device } from 'helpers/device';
import useDevice from 'hooks/use-device';
import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";

export default function App() {
  const deviceRes = useDevice();
  const location = useLocation();
  const page = location.pathname.substring(1) || 'home';

  //set app's background-image according to the page we're on
  const [image, setImage] = useState(bgData['home'][0][deviceRes]);
  useEffect(() => {  
    setImage(bgData[page][0][deviceRes]);
  }, [image, deviceRes, page]);

  return (
    <Div className="App" image={image} page={page}>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  background-color: #0B0D19;
  background-image: ${(props) => 'url(' + require('/' + props.image) + ')'};
  background-position: right top;
  background-size: cover;
  background-repeat: no-repeat;
  padding-block-start: 33px;
  //set overlay over background when page type is "crew"
  &:before{
    ${(props) => props.page === "crew" && `
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgb(11, 13, 23, 0.25);  
      z-index: 0;
  `} 
  }
  @media ${device.tablet}{
    padding-block-start: 0px;
  }
  @media ${device.desktop}{
    padding-block-start: 40px;
    height: 900px;
  }
`;
