
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleBrandProduct = ({ product }) => {
    const { _id, name, brand, types, price, image, rating, discription } = product
    return (
        <div className="card min-w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge bg-[#DCE2FF]">{brand}</div>
                </h2>
                <p>
                    {
                        discription.length > 50 ? discription.slice(0, 100) : discription
                    }
                </p>
                <p>Car types: {types}</p>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/details/${_id}`}><button className="badge badge-outline">Details</button></Link>
                    <Link to={`/product/update/${_id}`}><button className="badge badge-outline">update</button></Link>
                </div>
            </div>
        </div>
    );
};

SingleBrandProduct.propTypes = {
    product: PropTypes.object
};

export default SingleBrandProduct;