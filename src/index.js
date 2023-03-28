import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

//butonu ve alacağı propları tanımladım
//buton içine children da verebiliriz ya da text propu ile de içeriğini gönderebiliriz
const Button = ({ type, children, text, ...rest }) => {
  const buttonType = styles[`button-${type}`];

  //aldığı prop'a göre module.css içinden gerek stylı çeker
  return (
    <button className={`${styles.button} ${buttonType}`} {...rest}>{text}</button>
  );
};


//proptype tanımları
Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
};

export {Button};
