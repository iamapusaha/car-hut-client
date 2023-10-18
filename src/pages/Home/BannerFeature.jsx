import { BsSpeedometer, BsToggleOn } from 'react-icons/bs';
import { GiCandlebright } from 'react-icons/gi';

const BannerFeature = () => {
    return (
        <div className='text-white flex flex-col md:flex-row'>
            <div className=' bg-[#7F67FA] flex-1 px-3 '>

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
            <div className='flex-1 bg-[#242425]'>

            </div>
        </div>
    );
};

export default BannerFeature;