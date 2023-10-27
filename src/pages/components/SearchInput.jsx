import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '20%',
  border: '1px solid black',
//   met un border radius
    borderRadius: '5px',
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '70%',
  },
}));

export default function SearchInput() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon  width={10}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Nom de l'influencuer"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
