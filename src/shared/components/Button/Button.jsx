import React from 'react';
import PropTypes from 'prop-types'
import { buttonTypeOptions } from './buttonTypeOptions'


import styles from './Button.module.css'

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`${styles.btn} ${className}`} {...props}>{children}</button>
    );
}

Button.defaultProps = {
    type: 'button',
    className: '',
    onClick: () => { }
}

Button.propTypes = {
    type: PropTypes.oneOf(buttonTypeOptions),
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;