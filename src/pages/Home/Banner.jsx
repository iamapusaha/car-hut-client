import banner from '../../assets/alca-volpo-cab.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center -mt-16 z-0 bg-[#F6F6F6]'>
            <div className='md:flex-1 px-3 space-y-8 bg-[#FFF781] h-fit md:h-[800px] p-16 '>
                <div className='flex items-center md:h-[800px]'>
                    <div className='px-3 md:px-5 lg:px-20 '>
                        <h1 className='md:text-6xl text-3xl font-bold mb-6'>Classic Car Collection</h1>
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