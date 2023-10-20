
// import PropTypes from 'prop-types';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const cartsData = useLoaderData()
    const [cartData, setCartData] = useState(cartsData)
    const handleDeleteItems = id => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("data successfully  daleted ");
                    const remainingUser = cartData.filter(user => user._id !== id)
                    setCartData(remainingUser)
                }
            })
    }
    return (
        <div className="overflow-x-auto mx-auto container">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Brand Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        cartData.map((item, idx) => <tr key={item._id}>
                            <th>{idx + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.brand}</td>
                            <td>${item.price}</td>
                            <td>{item.rating}</td>
                            <td onClick={() => handleDeleteItems(item._id)} className="btn">X</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

MyCart.propTypes = {

};

export default MyCart;