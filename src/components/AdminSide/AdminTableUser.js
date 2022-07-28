import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'id', label: 'User Id', minWidth: 200 },
  { id: 'companyname', label: 'Company Name', minWidth: 200 },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 200,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 200,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 200,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, companyname, phone, email, location) {
  const density = phone / email;
  return { id, companyname, phone, email, location };
}

const rows = [
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
  createData('sncnocncoeiniopne', 'Kittivaasal Technologies pvt ltd', 1345678901, 'Kittivaasal@gmail.com', 'chennai'),
];

export default function AdminTableUser() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                Users List
              </TableCell>
              {/* <TableCell align="center" colSpan={3}>
                Details
              </TableCell> */}
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell onClick={() => navigate('/admin/userlist/123')} key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
