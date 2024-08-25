import React from 'react';
import './ProductCatalog.css';

const products = [
    { id: 1, name: 'Boat Headphones', price: 450, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQyGgbuGXFDAbUSD2x2S0DoGmw4-y2S1ZqHo8C5l7aRowUnIdMFGu3FX9FOfSIAIswp0rlGT0B3osyHDf8ynwdczo9GkgO09UF3rvTS7M5IJ5DPRuCKn-G6&usqp=CAE' },
    { id: 2, name: 'Shelves', price: 180, image: 'https://www.ikea.com/in/en/images/products/bergshult-pershult-wall-shelf-white-white__1092521_pe862887_s5.jpg?f=s' },
    { id: 3, name: 'Converse Chuck Taylors', price: 300, image: 'https://images.meesho.com/images/products/245059430/ry1dk_512.webp' },
    { id: 4, name: 'Tennis Racket(2)', price: 200, image: 'https://cdn.nwscdn.com/media/wysiwyg/3kf/tennis/Vermont_Colt_Mini_Tennis_25in_Racket_Tennis_Ball_Set.jpg'},
    { id: 5, name: 'The Hunger Games Set', price: 500, image: 'https://d2q7r0rjkm1t8k.cloudfront.net/uplister/images/d542f2fd996d7da1d01d15af8d0651e1.jpg'},
    { id: 6, name: 'The Beatles Hoodie', price: 150, image: 'https://cdn11.bigcommerce.com/s-p66uh2e57r/images/stencil/1280x1280/products/39535/53601/The_Beatles_Abbey_Road_Black_Pull_Over_Hoodie__20731.1691596401.jpg?c=1'},
    { id: 7, name: 'PS 5 Console', price: 550, image: 'https://d2xamzlzrdbdbn.cloudfront.net/products/f4d93df2-ee46-4deb-bc04-af77fd4c289f24280610_416x416.jpg'},
    { id: 8, name: 'Trekking Bag 50L', price: 100, image: 'https://www.trawoc.com/cdn/shop/files/9136eko0OEL.jpg?v=1710914791'},
    { id: 9, name: 'Kinect Game Xbox1', price: 50, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9441/9441173_sa.jpg'}

];

function ProductCatalog({ addToCart }) {
    return (
        <div className="product-catalog">
            <h2>Product Catalog</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCatalog;
