import './product.styles.css';
function Product({ title, price, image, rating }) {
    return (
        <div
            key={title}
            className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img
                src={image}
                alt=''
            />

            <button>Add to Basket</button>
        </div>
    );
}
export default Product;
