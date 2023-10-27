// pages/Details.js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {MdOutlineCampaign,MdGroups2,MdOutlineDashboard,MdOutlineEventNote,MdSettings} from 'react-icons/md';
import { GrCycle } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import userImg from '../../public/myprofile.jpeg'
import Image from 'next/image'
import Link from 'next/link';

export default function Details() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'ID depuis l'URL

  const [item, setItem] = useState({}); // Pour stocker les données de l'API

  // Utilisez l'ID pour appeler l'API et obtenir les données
  useEffect(() => {
    // Vous devez remplacer l'URL de l'API par la vôtre
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="relative w-[100%] h-[100%] bg-[#f1f1f1]">
             {/* topbar */}
    <div className="w-[85%] absolute top-0 right-0 h-[60px] bg-white text-black justify-end text-end p-3 items-center ">
        <div className="flex space-x-2 items-center justify-between   w-[150px] h-[50px]  ml-auto">
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
    <div className='w-[80%] h-[200px] absolute  top-24 left-64 bg-white text-black rounded-xl'>
      <h1 className='text-xl p-3'>Détails de l'élément avec l'ID {id}</h1>
      <p className='text-lg p-3 font-bold'>Title: {item.title}</p>
      <p className='text-lg p-3 font-bold'>Completed: {item.completed ? 'False' : 'True'}</p>
      <Link href="/" className='absolute right-16 top-4 text-xl font-bold cursor-pointer'>←Back</Link>
    </div>
    </div>
  );
}
