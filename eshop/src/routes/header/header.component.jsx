import './header.styles.css';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
// import { dividerClasses } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <Fragment>
            <div className='header'>
                <Link
                    to='/'
                    style={{ textDecoration: 'none' }}>
                    <div className='header__logo'>
                        <StorefrontIcon
                            className='header__logoImage'
                            fontSize='large'
                        />

                        <h2 className='header__logoTitle'>eSHOP</h2>
                    </div>
                </Link>
                <div className='header__search'>
                    <input
                        className='header__searchInput'
                        type='search'
                    />
                    <SearchIcon className='header__searchIcon' />
                </div>
                <div className='header__nav'>
                    <div className='nav__item'>
                        <span className='nav__itemLineOne'>Hello Guest</span>
                        <span className='nav__itemLineTwo'>Sign In</span>
                    </div>

                    <div className='nav__item'>
                        <span className='nav__itemLineOne'>Your</span>
                        <span className='nav__itemLineTwo'>Shop</span>
                    </div>
                    <Link
                        to='/checkout'
                        style={{ textDecoration: 'none' }}>
                        <div className='nav__itemBasket'>
                            <ShoppingBasketIcon />
                            <span className='nav__itemLinetwo nav__basketCount'>
                                0
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Header;
