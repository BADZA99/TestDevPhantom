import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import MoonLoader from "react-spinners/MoonLoader";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';


export default function TabInfluenceurs({ data, loading }) {
 const [selectedRowsCount, setSelectedRowsCount] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router=useRouter();
 const handleRowClick = (id) => {
  // Naviguer vers la page de détails avec l'ID
  router.push(`/Details?id=${id}`);
};

  const columns = [
    {
      field: 'checkId',
      headerName: '✔️',
      width: 70,
      renderCell: (params) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(params.id)}
          onChange={() => handleCheckboxChange(params.id)}
          className="rounded-md p-2"
        />
      ),
      },
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'title', headerName: 'Title', width: 220 },
    { field: 'completed', headerName: 'Completed', width: 130 },
    { field: 'Tauxdeconversion', headerName: 'Taux de conversion', width: 180 },
    { field: 'Note', headerName: 'Note', width: 130 },
    { field: 'Actions', headerName: 'Actions', width: 190 },

  ];

  // {  Tauxdeconversion: 20, Note: "★4.5", Actions: '...' },

  const rows = data.slice(0, 20).map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: `${todo.completed}`,
    Tauxdeconversion: 20,
    Note: "★4.5",
    Actions: '...',
  }));

   useEffect(() => {
    setSelectedRowsCount(selectedRows.length);
  }, [selectedRows]);

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };


  return (
    <div className="h-[] w-[76%] absolute p-3 top-72 left-72 bg-white text-black text-sm">
      <div className="flex justify-between w-[100%] mb-3">
        <h2 className="text-xl font-bold text-black">
          Liste Influenceurs <span>({data.length})</span>
        </h2>
         <Button variant="contained" className="bg-green-600 hover:bg-green-600  rounded-lg" onClick={handleOpen}>
        <span>({selectedRowsCount})</span>Inviter
      </Button>
      </div>
      {loading ? (
        <MoonLoader className="absolute left-1/2 right-1/2" />
      ) : (
          <table className="min-w-full bg-white w-[100%] border-4">
            <thead>
              <tr className="bg-gray-400">
                {columns.map((column) => (
                  <th key={column.field} className="px-4 py-2 text-left font-bold">
                    {column.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b cursor-pointer" onClick={() => handleRowClick(row.id)}>
                  {columns.map((column) => (
                    <td key={column.field} className="px-4 py-2">
                      {column.renderCell ? (
                        column.renderCell({
                          id: row.id,
                          field: column.field,
                          value: row[column.field],
                        })
                      ) : (
                        row[column.field]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        
      )}
      <Button variant="contained" className="bg-green-600 hover:bg-green-600  rounded-lg" onClick={handleOpen}>
        <span>({selectedRowsCount})</span>Inviter
      </Button>
      {
        open && (
          <BasicModal handleClose={handleClose} open={open}/>
        )

      }
    </div>
  );
}



const BasicModal=({handleClose,open})=> {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] bg-white text-black rounded-xl flex flex-col items-center p-5 '>
        <span className='ml-auto pt-2 text-sm font-bold cursor-pointer' onClick={handleClose}>X</span>
        <h1 className='text-2xl pt-1 mr-auto mb-3'>Choix de la campagne</h1>
        <label htmlFor="" className='mr-auto text-gray-400'>nom de l'entreprise</label>
          <Select
           fullWidth            
            sx={{
              backgroundColor: "#fff",
              m: 1,
              borderRadius: "10px"
            }}
            MenuProps={{ disableScrollLock: true }}
            value="Automne hiver 2022-20%"
            displayEmpty>
            <MenuItem value={"Automne hiver 2022-20%"}>Automne hiver 2022-20%</MenuItem>
            <MenuItem value={"Automne hiver 2022-20%"}>Automne hiver 2022-20%</MenuItem>

          </Select>
          <label htmlFor="Budget par influenceur" className='mr-auto mt-5 text-gray-400'>Budget par influenceur</label>
          <TextField
            fullWidth
            sx={{
              backgroundColor: "#fff",
              m: 1,
              borderRadius: "35px",

            }}
            id="Budget par influenceur"
            placeholder=" Votre Budget"
          />
          <label htmlFor="Cout par action" className='mr-auto mt-5 text-gray-400'>Cout par action</label>
          <TextField
            fullWidth
            sx={{
              m: 1,
              borderRadius: "25px",
              backgroundColor: "#fff",

            }}
            id="Cout par action"
            placeholder=" Votre Budget"
          />
            <Button variant="contained" className="bg-green-700 hover:bg-green-600 mr-auto rounded-xl mt-4">
            Envoyer invitation
      </Button>
       </form>
      </Modal>
    </>
  )
}