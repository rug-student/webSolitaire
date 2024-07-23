import React, { useState, useEffect} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

	useEffect(() => {
        const headerElement = document.querySelector('header');
        if (showMenu) {
            headerElement.classList.add('expand');
        } else {
            headerElement.classList.remove('expand');
        }
    }, [showMenu]);

    return (
        <header className="align-items-center">
            <Link className='logo' to="/">
                <img src="/imgs/gomibologo.png" className="logoHeader" alt="logo" />
            </Link>
            <div className={`menu-items ${showMenu ? 'show' : 'noShow'}`}>
                {(
                    <>
                        <div className="header-btn"><Link to="/report">Report</Link></div>
                        <div className="header-btn"><Link to="/dashboard">Dashboard</Link></div>
                        <div className="header-btn"><Link to="/questions">Questions</Link></div>
                        <div className="header-btn"><Link to="/">Logout</Link></div>
                    </>
                )}
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <MenuIcon />
            </div>
        </header>
    );
}

export default Header;