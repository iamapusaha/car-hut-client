import { useEffect, useState } from "react";
import BrandItems from "../BrandItems/BrandItems";
const Brand = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('https://car-hut-server-sand.vercel.app/brand')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center my-14">
            <div className="px-3">
                <h1 className="text-4xl font-bold">Brand Available</h1>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-2">
                {
                    brands.map(brand => <BrandItems key={brand._id} brand={brand}></BrandItems>)
                }
            </div>
        </div>
    );
};

export default Brand;