
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandItems = ({ brand }) => {

    const { name, photo } = brand;

    return (
        // <Link to={`/product/${name}`}>
        //     < div className='border-2 rounded border-yellow-400'>
        //         <img className='w-52 h-52' src={photo} alt="" />
        //         <p>{name}</p>
        //     </div >
        // </Link >
        <Link to={`/product/${name}`}>
            <div className="card min-w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

BrandItems.propTypes = {
    brand: PropTypes.object
};

export default BrandItems;