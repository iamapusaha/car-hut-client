import { useLoaderData } from "react-router-dom";
import SingleBrandProduct from "../SingleBrandProduct/SingleBrandProduct";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";


const BrandDetails = () => {
    const productData = useLoaderData()
    const brand = productData[0].brand;
    const [sliders, setSliders] = useState()
    useEffect(() => {
        fetch(`https://car-hut-server-sand.vercel.app/slider/${brand}`)
            .then(res => res.json())
            .then(data => setSliders(data))
    }, [brand])
    return (
        <div className="">
            <div>
                {
                    sliders?.map(slider => <Slider
                        key={slider._id}
                        slider={slider}
                    ></Slider>)
                }
            </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8">
                {
                    productData.map(product => <SingleBrandProduct
                        key={product._id}
                        product={product}
                    ></SingleBrandProduct>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;