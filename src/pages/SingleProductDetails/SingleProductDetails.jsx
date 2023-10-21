import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SingleProductDetails = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const MySwal = withReactContent(Swal)
    const productDetails = useLoaderData()

    const { name, brand, types, price, image, rating, discription } = productDetails;
    const newProduct = { email, name, brand, types, price, image, rating, discription }
    const handleADDToCart = () => {
        fetch('https://car-hut-server-sand.vercel.app/cart', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    MySwal.fire(
                        'Good job!',
                        'added the item in cart!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="card min-w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge bg-[#DCE2FF]">{brand}</div>
                </h2>
                <p>Car types: {types}</p>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>{discription}</p>
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