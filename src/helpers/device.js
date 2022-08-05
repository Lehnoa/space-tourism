

const size = {
    mobile: '320px',
    tablet: '533px',
    desktop: '1281px'
  }

  const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
  };
  
  export { device, size };
  