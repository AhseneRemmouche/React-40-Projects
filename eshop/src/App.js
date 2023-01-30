import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
    return (
        <div className='App'>
            <div className='header__logo'>
                <StorefrontIcon
                    className='header__logoImage'
                    fontSize='large'
                />
                <h2 className='header__logoTitle'>eSHOP</h2>
            </div>
            <div className='header__search'>
                <input
                    className='header__searchInput'
                    type='search'
                />
                <SearchIcon />
            </div>
            <div className='header__nav'>
                <div className='nav__item'>
                    <span className='nav__itemLineOne'>Hello Guest</span>
                    <span className='nav__itemLineOne'>Sign In</span>
                </div>

                <div className='nav__item'>
                    <span className='nav__itemLineOne'>Your</span>
                    <span className='nav__itemLineOne'>Shop</span>
                </div>

                <div className='nav__item'>
                    <ShoppingBasketIcon />
                    <span className='nav__itemLineOne'>0</span>
                </div>
            </div>
        </div>
    );
};

export default App;
