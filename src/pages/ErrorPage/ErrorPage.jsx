import { Link } from 'react-router-dom';
import dog from '../../assets/dog.png'

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className='text-center'>
                <h1 className='text-6xl font-bold'>404</h1>
                <img src={dog} alt="" />
                <Link to='/'><button className='btn'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;