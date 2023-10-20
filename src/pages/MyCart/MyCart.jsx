import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import PropTypes from 'prop-types';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const MySwal = withReactContent(Swal)
    const cartsData = useLoaderData()
    const [cartData, setCartData] = useState(cartsData)
    const handleDeleteItems = id => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-hut-server-sand.vercel.app/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log("data successfully  daleted ");
                            MySwal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingUser = cartData.filter(user => user._id !== id)
                            setCartData(remainingUser)
                        }
                    })
            }
        })
    }
    return (
        <div className="overflow-x-auto mx-auto container">
            <table className="table table-pin-cols">
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