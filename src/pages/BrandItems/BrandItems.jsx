
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandItems = ({ brand }) => {

    const { name, photo } = brand;

    return (
        <Link to={`/${name}`}>
            < div className='border-2 rounded border-yellow-400'>
                <img className='w-52 h-52' src={photo} alt="" />
                <p>{name}</p>
            </div >
        </Link >
    );
};

BrandItems.propTypes = {
    brand: PropTypes.object
};

export default BrandItems;