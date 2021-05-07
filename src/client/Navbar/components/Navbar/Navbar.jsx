import React from 'react'
import { menuItems } from './menu-items'
import NavbarItem from '../NavbarItem'

import styles from './Navbar.module.css'

const Navbar = () => {
    const menuElements = menuItems.map(path => {
        return <NavbarItem key={path.id} to={path.to}>{path.text}</NavbarItem>
    });

    return (
        <nav>
            <div >
                <ul className={styles.navMenu}>
                    {menuElements}
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;