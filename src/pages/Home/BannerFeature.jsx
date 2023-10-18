import { BsSpeedometer, BsToggleOn } from 'react-icons/bs';
import { GiCandlebright } from 'react-icons/gi';
import featureCar from '../../assets/feature-car.png'


const BannerFeature = () => {
    return (
        <div className=' flex flex-col md:flex-row'>
            <div className=' bg-[#7F67FA] flex-1 px-3 text-white'>

                <div className='flex justify-around w-full border-b-2 border-slate-300 pt-10 mb-16'>

                    <h2 className='text-2xl font-semibold'>Features</h2>
                    <div className='flex gap-3 items-center'>
                        <p>Manual</p>
                        <BsToggleOn></BsToggleOn>
                    </div>
                </div>
                <div className='flex gap-3 justify-around w-full pb-10'>
                    <div className='space-y-5'>
                        <GiCandlebright className='text-7xl border rounded-full p-2 bg-[#8C76FB]'></GiCandlebright>
                        <p className='text-2xl'>Consumption</p>
                        <h2 className='text-5xl font-semibold'>12 liters</h2>
                    </div>
                    <div className='space-y-5'>
                        <BsSpeedometer className='text-7xl border rounded-full p-2 bg-[#8C76FB]'></BsSpeedometer>
                        <p className='text-2xl'>Speed Up</p>
                        <h2 className='text-5xl font-semibold'>75 Km/h</h2>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col md:flex-row  bg-[#F6F6F6] items-end justify-evenly'>
                <div className='flex-1 space-y-7 pl-6 mb-0 py-3 md:py-0 md:mb-9'>
                    <p className='text-2xl font-medium'>City crossover</p>
                    <h1 className='text-4xl'>1952 The Alca Volpe Luxury Cab</h1>
                    <h1 className='text-7xl'>01/<span className='text-[#919192]'>08</span></h1>
                </div>
                <div className='flex-1 w-full sm:w-fit'>
                    <img className='w-full sm:w-fit' src={featureCar} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerFeature;