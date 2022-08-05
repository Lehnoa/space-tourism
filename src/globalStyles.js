import { createGlobalStyle } from 'styled-components/macro';
import { device } from 'helpers/device';
 
const GlobalStyle = createGlobalStyle`
:root {
    --main-dark: #0B0D17;
    --main-light: #D0D6F9;
    --main-white: #FFFFFF;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    color: var(--main-light);
}
* {
    box-sizing: border-box;
}
body {
    margin-inline: auto;
    margin: 0;
    padding: 0;
    background-color: var(--main-dark);
}
h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    color: var(--main-white);
    font-weight: normal;
}
h1 {
    font-family: 'Bellefair', serif;
    font-size: 5rem;
    line-height: 100px;
    color: var(--main-light);
}
h2 {
    font-family: 'Bellefair', serif;
    letter-spacing: 0px;
    font-size: 56px;
    text-transform: uppercase;
}
h3 {
    font-family: 'Bellefair', serif;
    font-size: 24px;
    text-transform: uppercase; 
}
h4, .h4 {
    font-family: 'Bellefair', serif;
    font-size: 1rem;
    text-transform: uppercase;
}
h5, .h5, .nav-text {
    font-family:'Barlow Condensed', sans-serif; 
    letter-spacing: 2.7px;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--main-white);
}

.subheading1 {
    font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.875rem;
      letter-spacing: 2.36px;
      color: #D0D6F9;
      text-transform: uppercase;
}
a {
    text-decoration: none;
}
p {
    line-height: 25px;
    font-size: 0.9375rem;
    color: var(--main-light);
    font-family: 'Barlow', sans-serif;
}
ul {
    margin-block: 0;
    padding-inline: 0;
    list-style: none;
}
hr {
    background-color: #383B4B;
    border: 1px solid #383B4B; 
}

.hidden {
  display: none;
}

@media ${ device.tablet } {
    h1 {
        font-size: 9.375rem;
        line-height: normal;
    }
    h2 {
        font-size: 80px; 
    }
    h3 {
        font-size: 40px;
    }
    h4, .h4 {
        font-size: 1.5rem;
    }
    h5, .h5 {
        font-size: 1.25rem;
        letter-spacing: 3.38px;
    }
    p {
        font-size: 1rem;
        line-height: 28px;
    }
}
@media ${ device.desktop } {
    h2 {
        font-size: 100px; 
    }
    h3 {
        font-size: 56px;
    }
    h4, .h4 {
        font-size: 2rem;
    }
    h5, .h5 {
        font-size: 1.75rem;
        letter-spacing: 4.72px;
    }    
    p {
        line-height: 32px;
        font-size: 18px;
    }
}
`;
 
export default GlobalStyle;