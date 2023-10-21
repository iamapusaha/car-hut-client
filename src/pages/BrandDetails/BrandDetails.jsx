import { useLoaderData } from "react-router-dom";
import SingleBrandProduct from "../SingleBrandProduct/SingleBrandProduct";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";


const BrandDetails = () => {
    const [loading, setLoading] = useState(true);
    const productData = useLoaderData(true)
    const brand = productData[0].brand;
    const [sliders, setSliders] = useState()


    useEffect(() => {
        fetch(`https://car-hut-server-sand.vercel.app/product/${brand}`)
            .then(res => res.json())
            .then(data => {
                setSliders(data);
                setLoading(false);
            })
    }, [brand])
    if (loading) {
        return <span className="w-16 md:w-96 loading loading-infinity text-[#7F67FA]"></span>
    }
    return (
        <div className="">

            <div>
                {
                    productData?.map(slider => <Slider
                        key={slider._id}
                        slider={slider}
                    ></Slider>)
                }
            </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8">
                {
                    (sliders?.length > 0) ?

                        sliders?.map(product => <SingleBrandProduct
                            key={product._id}
                            product={product}
                        ></SingleBrandProduct>)
                        : <h1 className="my-6 text-xl md:text-4xl font-bold text-blue-400 col-span-4 text-center">Regrettably, no cars from this brand are available at present.</h1>
                }

            </div>
        </div>
    );
};

export default BrandDetails;