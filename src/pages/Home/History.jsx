import owner from '../../assets/owner.png'
import featureCar from '../../assets/history-car.png'
import { FaRightToBracket } from "react-icons/fa6";


const History = () => {
    return (
        <div className='bg-[#E5F2FF]'>
            <h1 className="text-3xl md:text-7xl font-bold text-center pt-10 px-5 mb-16">Telling the History of America Through the Automobile</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center items-start'>
                <div className='w-60 md:w-56 lg:w-80 space-y-10'>
                    <img className='w-1/2 ' src={owner} alt="" />
                    <div className='border-b-2 border-slate-300'></div>
                    <p className='text-3xl font-semibold'>Fostering Experences that Connect people with the History, Heritage,and social impact of the Automobile.</p>
                    <button className='flex items-center gap-4 rounded-full border-8 border-white px-6 py-3 text-white bg-[#4A54CE] text-3xl'>Learn more <FaRightToBracket className='text-6xl border rounded-full p-2 bg-[#8C76FB'></FaRightToBracket></button>
                </div>
                <div>
                    <img className='' src={featureCar} alt="" />
                </div>
                <div className='w-60 space-y-8 py-3'>
                    <h1 className='text-4xl font-semibold'>The Shop</h1>
                    <p className='text-5xl font-medium'>435</p>
                    <p className='text-5xl font-medium'>Uniqe Vericles</p>
                    <p className='text-5xl font-medium'>130k</p>
                    <p className='text-5xl font-medium'>Annual Visitors</p>
                    <p className='text-5xl font-medium'>190k</p>
                    <p className='text-5xl font-medium'>Sq. Ft. of Exhibit Space</p>
                </div>
            </div>
        </div>
    );
};

export default History;