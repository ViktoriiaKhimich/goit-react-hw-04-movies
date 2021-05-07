import React from 'react';
import PropTypes from 'prop-types'
import { inputTypeOptions } from './typeOptions'

import styles from "./FormInput.module.css";

const FormInput = ({ className, ...props }) => {
    return (
        <>
            <input className={`${styles.searchField} ${className}`} {...props} />
        </>
    );
}

FormInput.defaultProps = {
    required: false,
    placeholder: '',
    className: '',
    value: '',
    type: 'text',
    name: '',
    onChange: () => { }
}

FormInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(inputTypeOptions),
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
}

export default FormInput;