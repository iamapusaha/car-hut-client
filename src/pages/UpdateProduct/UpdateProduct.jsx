import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, name, brand, types, price, image, rating, discription } = product;
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const types = form.types.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const discription = form.discription.value;
        const newProduct = { name, brand, types, price, image, rating, discription }
        console.log(newProduct);
        fetch(`http://localhost:5000/product/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="container mx-auto my-6 bg-[#F6F6F6] p-5 rounded">
            <h1 className="text-5xl text-center my-2">Update Product</h1>
            <form onSubmit={handleUpdateProduct}>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">product Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" defaultValue={name} name="name" placeholder="product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select className="select w-full" defaultValue={brand} name="brand">
                            <option disabled selected>What is your Product brand?</option>
                            <option>mercedes</option>
                            <option>honda</option>
                            <option>jaguar</option>
                            <option>hundai</option>
                            <option>bmw</option>
                            <option>tesla</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Car types</span>
                        </label>
                        <select className="select w-full" defaultValue={types} name="types">
                            <option disabled selected>What is your car types?</option>
                            <option>Classic Cars</option>
                            <option>Electric Cars</option>
                            <option>Convertible Cars</option>
                            <option>Compact Cars</option>
                            <option>Sports Cars</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">product image</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" defaultValue={image} name="image" placeholder="product image utl" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <select className="select w-full" defaultValue={rating} name="rating">
                            <option disabled selected>Gives your product rating?</option>
                            <option>1</option>
                            <option>1.5</option>
                            <option>2</option>
                            <option>2.5</option>
                            <option>3</option>
                            <option>3.5</option>
                            <option>4</option>
                            <option>4.5</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <label className="input-group ">
                            <textarea defaultValue={discription} name="discription" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-[#4D55D0] text-white" type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;