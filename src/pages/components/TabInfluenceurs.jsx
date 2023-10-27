import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function TabInfluenceurs() {
const columns = [
  { field: 'id', headerName: '', width: 10 },
  { field: 'firstName', headerName: 'Nom influenceur', width: 180 },
  { field: 'folowers', headerName: 'Followers', width: 130 },
  {
    field: 'Vue',
    headerName: 'Nombre de vue',
    type: 'number',
    width: 150,
  },
  {
    field: 'Categorie',
    headerName: 'Categorie',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'Tauxdeconversion', headerName: 'Taux de conversion', width: 180 },
  { field: 'Note', headerName: 'Note', width: 130 },
  { field: 'Actions', headerName: 'Actions', width: 150 },

];

const rows = [
//   refais les rows
  { id: 1, lastName: 'Snow', firstName: 'Jon', folowers: 35, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '...' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', folowers: 42, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', folowers: 45, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', folowers: 16, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', folowers: 255, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 6, lastName: 'Melisandre', firstName: "null", folowers: 150, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', folowers: 44, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', folowers: 36, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20, Note: "★4.5", Actions: '' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', folowers: 65, Vue: 2000, Categorie: 'sport', Tauxdeconversion: 20,Note: "★4.5", Actions: '' }
];
  return (
   <div className="h-[] w-[78%] absolute p-3  top-72 left-72 bg-white text-black text-sm">
    <div className="flex justify-between w-[100%]">
        <h2 className='text-lg font-bold text-black mx-7 mb-3'>Liste Influenceurs <span>100</span></h2>
        <Button variant="contained" className='bg-green-700 hover:bg-green-600 mb-1'><span>(100)</span>Inviter</Button>

    </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
        <Button variant="contained" className='bg-green-700 hover:bg-green-600 mb-1'><span>(100)</span>Inviter</Button>

    </div>
  )
}
// https://jsonplaceholder.typicode.com/todos