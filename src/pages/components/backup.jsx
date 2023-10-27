import {LuLayoutDashboard} from 'react-icons/lu';
import {RxDashboard} from 'react-icons/rx';
import {MdOutlineCampaign,MdGroups2} from 'react-icons/md';

export default function Layout() {
  return (
    <div className="relative w-[100%] h-[100%]">
        {/* topbar */}
    <div className="w-[85%] absolute top-0 right-0 h-[50px] bg-white text-black justify-end text-end p-3 center ">top bar</div>
    {/* sidebar */}
    <div className="w-[15%] h-[710px] absolute flex flex-col bg-white text-black items-center">
        <span className="pt-10 text-green-400 font-bold text-lg ">DevPantom</span>

        <ul className="flex flex-col w-[100%] pt-[40%] justify-center items-center text-lg">
            <li className="cursor-pointer w-[100%] p-3 text-center hover:bg-green-50 hover:border-l-green-500 flex justify-center  items-center"><RxDashboard size={19} className='pr-1'/>Tableau de bord</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-2 flex  space-x-2 items-center"><MdOutlineCampaign size={30} className='pr-1'/>campagne</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-2 flex space-x-2 j  items-center">
                <MdGroups2 size={0} className='pl-1 pr-7'/>
              activites</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-2 flex justify-center  items-center">conversions</li>
        </ul>

        <ul className="pt-40 w-[100%]">
            <li className="cursor-pointer w-[100%] p-3 text-center hover:bg-green-50 hover:border-l-2">Parametres</li>
            <li className="cursor-pointer w-[100%] p-3 text-center hover:bg-green-50 hover:border-l-2">Deconnexion</li>
        </ul>

    </div>


      
    </div>
  )
}
