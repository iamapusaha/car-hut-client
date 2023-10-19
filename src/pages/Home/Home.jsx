
// import PropTypes from 'prop-types';

import Brand from "../Brand/Brand";
import Banner from "./Banner";
import BannerFeature from "./BannerFeature";
import History from "./History";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerFeature></BannerFeature>
            <History></History>
            <Brand></Brand>
        </div>
    );
};

Home.propTypes = {

};

export default Home;