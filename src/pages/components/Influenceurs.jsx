import { Button } from '@mui/material'
import React from 'react'
import SearchInput from './SearchInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Influenceurs() {
  return (
    <div className='w-[82%] h-[200px] absolute  top-16 left-64'>
        <h2 className='text-lg font-bold text-black mx-7 mb-3'>Influenceurs</h2>

        <div className='w-[95%] h-[160px] bg-white mx-auto flex flex-col rounded-lg p-3'>
             <div className='w-full flex justify-between h-16 text-black items-center mb-6'>
                    <span className="text-lg font-light ">Recherche d'influenceurs</span>
                    <Button variant="contained" className='bg-green-700 hover:bg-green-600'>Rechercher</Button>
             </div>
             <div className='w-full flex justify-between h-1/2 text-gray-500 items-center'>
                <SearchInput/>
                <Select
                size='small'
                sx={{
                backgroundColor: "#fff",
                m: 1,
                borderRadius:"5px"
                }}
                MenuProps={{ disableScrollLock: true }}
                value="Nombre de followers"
                displayEmpty>
            <MenuItem value={"Nombre de followers"}>Nombre de followers</MenuItem>
            <MenuItem value={"Nombre de followers"}>Nombre de followers</MenuItem>

                </Select>
                <Select
              size='small'
                sx={{
                backgroundColor: "#fff",
                m: 1,
                width:"20ch",
                borderRadius:"5px"
                }}
            MenuProps={{ disableScrollLock: true }}
            value="Nombre de vue"
            displayEmpty
          >
            <MenuItem value={"Nombre de vue"}>JNombre de vue</MenuItem>
            <MenuItem value={"Nombre de vue"}>Nombre de vue</MenuItem>

                </Select>
                <Select
            size='small'
                sx={{
                backgroundColor: "#fff",
                m: 1,
                borderRadius:"5px",
                width:"15ch"
                }}
            MenuProps={{ disableScrollLock: true }}
            value="Categorie"
          >
            <MenuItem value={"Categorie"}>Categorie</MenuItem>
            <MenuItem value={"Categorie"}>Categorie</MenuItem>

                </Select>
                <Select
            size="small"
            sx={{
              backgroundColor: "#fff",
              m: 1,
              borderRadius:"5px",
            }}
            MenuProps={{ disableScrollLock: true }}
            value="Audiance age"
            displayEmpty
          >
            <MenuItem value={"Audiance age"}>Audiance age</MenuItem>
            <MenuItem value={"Audiance age"}>Audiance age</MenuItem>

                </Select>
                <Select
            size='small'
            sx={{
              backgroundColor: "#fff",
              m: 1,
              width:"15ch",
              borderRadius:"5px"
            }}
            MenuProps={{ disableScrollLock: true }}
            value="note"
            displayEmpty
          >
            <MenuItem value={"note"}>note</MenuItem>
            <MenuItem value={"note2"}>note2</MenuItem>

                </Select>     
             </div>
        </div>
      
    </div>
  )
}
