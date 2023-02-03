import './product.styles.css';
function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>Title</p>
                <p className='product__price'>$24</p>
                <div className='product__rating'>⭐⭐⭐</div>
            </div>
            <img src='https://m.media-amazon.com/images/I/51P5u1TIIlL._AC_SX466_.jpg' alt='' />
            <button className='product__button'>Add to basket</button>
        </div>
    );
}
export default Product;
