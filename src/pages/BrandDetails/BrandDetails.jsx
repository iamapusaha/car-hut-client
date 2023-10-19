import { useLoaderData } from "react-router-dom";
import SingleBrandProduct from "../SingleBrandProduct/SingleBrandProduct";


const BrandDetails = () => {
    const productData = useLoaderData()

    return (
        <div>
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