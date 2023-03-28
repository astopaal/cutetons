import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Button = ({ type, children, text, ...rest }) => {
  const buttonType = styles[`button-${type}`];

  return (
    <button className={`${styles.button} ${buttonType}`} {...rest}>{text}</button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
};

export {Button};
