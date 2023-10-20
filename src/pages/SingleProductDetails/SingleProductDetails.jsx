
// import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const SingleProductDetails = () => {
    const productDetails = useLoaderData()

    const { _id, name, brand, types, price, image, rating, discription } = productDetails;
    const newProduct = { name, brand, types, price, image, rating, discription }
    const handleADDToCart = () => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
    }
    return (
        <div className="card min-w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={handleADDToCart} className="badge badge-outline">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

SingleProductDetails.propTypes = {

};

export default SingleProductDetails;