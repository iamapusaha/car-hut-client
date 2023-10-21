import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddProduct = () => {
    const MySwal = withReactContent(Swal)
    const handleAddProduct = e => {
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
        fetch('https://car-hut-server-sand.vercel.app/product', {
            method: "POST",
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
                        'added new product!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="container mx-auto my-6 bg-[#F6F6F6] p-5 rounded">
            <h1 className="text-5xl text-center my-2">Add New Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="name" placeholder="product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select className="select w-full" name="brand">
                            <option disabled selected>What is your Product brand?</option>
                            <option>mercedes</option>
                            <option>honda</option>
                            <option>jaguar</option>
                            <option>hyundai</option>
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
                        <select className="select w-full" name="types">
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
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product image</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="image" placeholder="product image utl" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <select className="select w-full" name="rating">
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
                            <textarea name="discription" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-[#4D55D0] text-white" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;