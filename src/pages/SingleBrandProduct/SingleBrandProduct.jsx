
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleBrandProduct = ({ product }) => {
    const { _id, name, brand, types, price, image, rating, discription } = product
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
                    <Link to={`/details/${_id}`}><button className="badge badge-outline">Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="badge badge-outline">update</button></Link>
                </div>
            </div>
        </div>
    );
};

SingleBrandProduct.propTypes = {
    product: PropTypes.object
};

export default SingleBrandProduct;