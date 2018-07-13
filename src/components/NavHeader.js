import React from 'react';
import IconButton from './buttons/Icon';

const NavHeader = ({ title, onClose }) => {
    return (
        <nav className="app-nav">
            <IconButton icon="arrow-left" onClick={onClose} />
            <div>{title}</div>
        </nav>
    )
}

export default NavHeader;
