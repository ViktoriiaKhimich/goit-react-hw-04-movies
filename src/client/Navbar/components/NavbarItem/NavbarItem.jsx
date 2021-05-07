import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import styles from './NavbarItem.module.css'

const NavbarItem = ({ to, children }) => {
    return (
        <li>
            <NavLink className={styles.navbarItem} activeClassName={styles.active} exact to={to}>{children}</NavLink>
        </li>
    );
}

NavbarItem.defaultProps = {
    to: '',
    children: ''
}

NavbarItem.propTypes = {
    to: PropTypes.string,
    children: PropTypes.string,
}


export default NavbarItem;