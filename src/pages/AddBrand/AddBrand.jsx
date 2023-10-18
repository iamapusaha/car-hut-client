

const AddBrand = () => {
    const handleADDBrand = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = { name, photo }
        fetch('http://localhost:5000/brand', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(brand)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">please add you Brand</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleADDBrand} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brnad Image</span>
                            </label>
                            <input type="text" placeholder="Brand Photo" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Brand</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBrand;