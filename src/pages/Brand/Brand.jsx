import { useEffect, useState } from "react";
import BrandItems from "../BrandItems/BrandItems";
const Brand = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="flex items-center my-14">
            <div className="px-3">
                <h1 className="text-4xl font-bold">Brand Available</h1>
            </div>
            <div className="grid grid-cols-6 gap-2">
                {
                    brands.map(brand => <BrandItems key={brand._id} brand={brand}></BrandItems>)
                }
            </div>
        </div>
    );
};

export default Brand;