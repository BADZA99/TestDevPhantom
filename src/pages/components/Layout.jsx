
import {GrCycle} from 'react-icons/gr';
import {BiLogOut} from 'react-icons/bi';
import {MdOutlineCampaign,MdGroups2,MdOutlineDashboard,MdOutlineEventNote,MdSettings} from 'react-icons/md';
import userImg from '../../../public/myprofile.jpeg'
import Image from 'next/image'
import Influenceurs from './Influenceurs';
import TabInfluenceurs from './TabInfluenceurs';
import { useEffect, useState } from 'react';
import { useSearchStore } from '@/store';




export default function Layout() {
  const searchText = useSearchStore((state) => state.searchText);
   const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch('/api/todos');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);
  // console.log(todos)
  return (
    <div className="relative w-[100%] h-[100%] bg-[#f1f1f1]">
        {/* topbar */}
    <div className="w-[85%] absolute top-0 right-0 h-[60px] bg-white text-black justify-end text-end p-3 items-center ">
        <div className="flex space-x-2 items-center justify-between  w-[150px] h-[50px]  ml-auto">
          <span className=' text-sm'>Jean david</span>
          <Image width={40} height={40} src={userImg} alt="user image" className='rounded-full cover'/>
        </div>
    </div>
    {/* sidebar */}
    <div className="w-[15%] h-[1010px] absolute flex flex-col bg-white text-black items-center">
        <span className="pt-10 text-green-400 font-bold text-lg ">DevPantom</span>

        <ul className="flex flex-col w-[100%] pt-[40%] justify-center items-center text-lg">
            <li className="cursor-pointer w-[100%] p-3 text-center hover:bg-green-50  hover:border-l-4 hover:border-l-green-600 flex justify-center  items-center"><MdOutlineDashboard size={19} className='pr-1'/>Tableau de bord</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-4 hover:border-l-green-600 flex  space-x-2 items-center"><MdOutlineCampaign size={25} className='pr-1'/>Campagne</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-4 hover:border-l-green-600 flex  items-center">
                <MdGroups2 size={25} className='pr-[4px]'/>
              Influenceurs</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-4 hover:border-l-green-600 flex  items-center">
                <MdOutlineEventNote size={25} className='pr-[4px]'/>
              Activites</li>
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-4 hover:border-l-green-600 flex items-center">
                <GrCycle size={25} className='pr-[4px]'/>
              Conversions</li>
        </ul>

        <ul className="pt-96 w-[100%] flex flex-col justify-center items-center text-lg">
            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-4 hover:border-l-green-600 flex items-center">
                <MdSettings size={25} className='pr-[4px]'/>
              Parametres</li>

            <li className="cursor-pointer w-[100%] pt-3 pb-3 pl-10 text-center hover:bg-green-50 hover:border-l-4 hover:border-l-green-600 flex items-center">
                <BiLogOut size={25} className='pr-[4px]'/>
              Deconnexion</li>
            
        </ul>

    </div>
    <Influenceurs/>
    <TabInfluenceurs data={todos} loading={loading} searchText={searchText}/>

      
    </div>
  )
}
