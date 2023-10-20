import { useLoaderData } from "react-router-dom";
import SingleBrandProduct from "../SingleBrandProduct/SingleBrandProduct";


const BrandDetails = () => {
    const productData = useLoaderData()
    const brand = productData[0].brand
    return (
        <div className="border border-red-500">
            <h1 className="">{brand}</h1>
            <div className="border border-blue-600 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-8">
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