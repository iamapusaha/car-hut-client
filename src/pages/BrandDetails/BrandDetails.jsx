import { useLoaderData } from "react-router-dom";


const BrandDetails = () => {
    const productData = useLoaderData()
    console.log(productData);
    return (
        <div>
            <h1>i am from details</h1>
        </div>
    );
};

export default BrandDetails;