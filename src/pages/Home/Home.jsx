
// import PropTypes from 'prop-types';

import Banner from "./Banner";
import BannerFeature from "./BannerFeature";
import History from "./History";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerFeature></BannerFeature>
            <History></History>
        </div>
    );
};

Home.propTypes = {

};

export default Home;