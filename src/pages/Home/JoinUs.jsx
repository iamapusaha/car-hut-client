import { FaRightToBracket } from "react-icons/fa6";
import join from '../../assets/join-us.png'
const JoinUs = () => {
    return (
        <div className="my-11 gap-5 flex flex-col md:flex-row items-center justify-center bg-[#E4F1FE] p-11">
            <div className="flex-1 rounded-2xl border-8 border-white">
                <img className="w-full" src={join} alt="" />
            </div>
            <div className="flex-1 space-y-6">
                <h1 className="text-7xl font-semibold">Come Join Us</h1>
                <p className="text-3xl font-bold">Amazing Events for the entire Family.Enjoy classic car Shows,drive-ins, motorctcle shows,events for children, and more</p>
                <button className='flex items-center gap-4 rounded-full border-8 border-white px-6 py-3 text-white bg-[#4A54CE] text-3xl'>See All Events <FaRightToBracket className='text-6xl border rounded-full p-2 bg-[#8C76FB'></FaRightToBracket></button>
            </div>

        </div>
    );
};

export default JoinUs;