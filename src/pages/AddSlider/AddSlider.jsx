

const AddSlider = () => {
    const handleAddSlider = e => {
        e.preventDefault()
        const form = e.target;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const photo2 = form.photo2.value;
        const photo3 = form.photo3.value;
        const slider = { brand, photo, photo2, photo3 }
        console.log(slider);
        fetch('http://localhost:5000/slider', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(slider)
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
                    <form onSubmit={handleAddSlider} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <input type="text" placeholder="name" name="brand" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brnad Image</span>
                            </label>
                            <input type="text" placeholder="Brand Photo" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brnad Image</span>
                            </label>
                            <input type="text" placeholder="Brand Photo 2" name="photo2" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brnad Image</span>
                            </label>
                            <input type="text" placeholder="Brand Photo 3" name="photo3" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Slider</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSlider;