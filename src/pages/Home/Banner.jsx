import banner from '../../assets/alca-volpo-cab.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center -mt-20 z-0 bg-[#F6F6F6]'>
            <div className='sm:pt-0 pt-20 md:py-0  py-6 px-3  lg:w-64 w-full md:flex-1 space-y-8 bg-[#FFF781] h-fit md:h-[800px] '>
                <div className='pl-0 lg:pl-14 px-2 md:px-0 flex items-end md:h-[600px]'>
                    <div className=''>
                        <h1 className='md:text-7xl text-3xl font-bold mb-6'>Classic Car Collection</h1>
                        <p className='text-xl'>Over 170 classsic and vintage cars and 28 motorcles are on display in a 5 connected climate-controlled buildings.</p>
                    </div>
                </div>
            </div>
            <div className='md:flex-1'>
                <img className='w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;