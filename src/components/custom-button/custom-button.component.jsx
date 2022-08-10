import React from 'react';

import classes from './custom-button.styles.scss';

const CustomButton = ({children, normalBtn, inverted, ...otherProps}) => (
  <button className={`${inverted ? 'inverted': '' } ${normalBtn ? 'normal-btn': '' } custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;