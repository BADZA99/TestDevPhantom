import React, { useEffect, useRef, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import MoonLoader	 from "react-spinners/MoonLoader";


export default function TabInfluenceurs({data,loading}) {
  

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'title', headerName: 'Title', width: 220 },
  { field: 'completed', headerName: 'Completed', width: 130 },
  { field: 'Tauxdeconversion', headerName: 'Taux de conversion', width: 180 },
  { field: 'Note', headerName: 'Note', width: 130 },
  { field: 'Actions', headerName: 'Actions', width: 190 },

];


  useEffect(() => {
    const element = document.querySelectorAll('.Mui-selected');
    console.log(element);
  }, []);
// {  Tauxdeconversion: 20, Note: "★4.5", Actions: '...' },

  const rows = data.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    Tauxdeconversion: 20,
    Note: "★4.5",
    Actions: '...',
  }));
  return (
   <div className="h-[] w-[78%] absolute p-3  top-72 left-72 bg-white text-black text-sm">
    <div className="flex justify-between w-[100%]">
        <h2 className='text-lg font-bold text-black mx-7 mb-3'>Liste Influenceurs <span>{data.length}</span></h2>
        <Button variant="contained" className='bg-green-700 hover:bg-green-600 mb-1'><span>({})</span>Inviter</Button>

    </div>
      { loading === true ?  <MoonLoader className=' absolute left-1/2 right-1/2'	/> :<DataGrid
        rows={rows}
        columns={columns}
         initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection
        pageSizeOptions={[5, 10,15]}
             /> }
        <Button variant="contained" className='bg-green-700 hover:bg-green-600 mb-1'><span>({})</span>Inviter</Button>

    </div>
  )
}