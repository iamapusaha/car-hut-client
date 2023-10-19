import { useLoaderData } from "react-router-dom";
import SingleBrandProduct from "../SingleBrandProduct/SingleBrandProduct";


const BrandDetails = () => {
    const productData = useLoaderData()

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            {
                productData.map(product => <SingleBrandProduct
                    key={product._id}
                    product={product}
                ></SingleBrandProduct>)
            }
        </div>
    );
};

export default BrandDetails;