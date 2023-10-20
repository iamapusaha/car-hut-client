
// import PropTypes from 'prop-types';

import Brand from "../Brand/Brand";
import Banner from "./Banner";
import BannerFeature from "./BannerFeature";
import History from "./History";
import JoinUs from "./JoinUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerFeature></BannerFeature>
            <History></History>
            <Brand></Brand>
            <JoinUs></JoinUs>
        </div>
    );
};

Home.propTypes = {

};

export default Home;