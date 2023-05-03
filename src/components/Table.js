import * as React from 'react';
import  {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SearchBarContainer from './searchBar';
import HeaderContainer from './HeaderBar';
import { loginRequest } from '../authConfig';
import { callMsGraph } from '../graph';
import { useMsal } from '@azure/msal-react';




const originalRows = [
    { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
  ];

export default function BasicTable() {
    const [rows, setRows] = useState([]);
    const [forFilterData, setForFilterRows] = useState([]);
    const [search, setSearched] = useState("");
    const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

    useEffect(()=>{
        instance
        .acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
        })
        .then((response) => {
            callMsGraph(response.accessToken).then((response) =>{
                setRows(response.data);
                setForFilterRows(response.data);
            }
            );
        });
    },[])

    
    const onSearchChange = (value) => {
        setSearched(value);
            const filteredRows = forFilterData.filter((row) => {
                return row.employee_name.toLowerCase().includes(value.toLowerCase());
              });
              setRows(filteredRows);              
      };
    
    
  return (
   
    <div>
        <SearchBarContainer
        onSearch={onSearchChange} value={search}
        />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.employee_name}
              </TableCell>
              <TableCell align="right">{row.employee_age}</TableCell>
              <TableCell align="right">{row.employee_salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}