import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableSortLabel } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid, } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Input, Button, ActionButton } from '../../components/controls';
import { makeStyles } from '@mui/styles';
import Popup from '../../components/Popup';

import { createTheme, ThemeProvider } from '@mui/material/styles'; //don't delete

import { insertData, updateData, deleteData, getData } from '../../service/service';

import { FormService } from '../forms';

import { restrict, accessItems } from '../../service/AuthService';

const theme = createTheme({
  palette: {
    warning: {
      main: '#ff0000',
      darker: '#2bff00',
    },
  },
});

const useStyles = makeStyles({
  root: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  searchInput: {
    width: '100%',
  },
  toolBar: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  newButton: {
    // position: 'absolute',
    // right: '10px'
  }
})

function TableStructure(props) {
  const { tableColumns, tableName, accessRight } = props
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    getData(setData, tableName);
  }, []);

  // peging
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // sorting
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()

  const handleSortRequest = cellId => {
    const isAsc = orderBy === cellId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cellId);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  // searching
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.construction_material.toLowerCase().includes(target.value))
      }
    })
  }

  const addOrEdit = (row, resetForm) => {
    if (row.id == 0) {
      insertData(row, data, tableName, setData)
    }
    else {
      updateData(row, tableName, setData)
    }
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false) // closing popup
  }

  const removeData = (row) => {
    deleteData(row, tableName, setData)
  }

  const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  function titleForm(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function testMethod() {
    return 'hello';
  }

  return (
    <div className='data-table'>
      <ThemeProvider theme={theme}>
        <Paper sx={{ overflow: 'hidden' }}>
          <Toolbar>
            <Input
              className={classes.searchInput}
              InputProps={{
                startAdornment: (<InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>)
              }}
              onChange={handleSearch}
            />
            <Grid container justifyContent={'flex-end'}>
              {restrict(accessRight, 'operator') && <Button
                text='Add row'
                variant='outlined'
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }} />}
            </Grid>
          </Toolbar>
          <TableContainer >
            <Table >
              <TableHead>
                <TableRow>
                  {tableColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : 'asc'}
                        onClick={() => { handleSortRequest(column.id) }}>
                        {column.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(filterFn.fn(data), getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {tableColumns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <TableCell align='right'>
                          <ActionButton
                            color="primary"
                            onClick={() => { openInPopup(row) }}>
                            <EditIcon fontSize="small" />
                          </ActionButton>
                          <ActionButton
                            color="secondary"
                            onClick={() => { removeData(row) }}>
                            <DeleteIcon fontSize="small" />
                          </ActionButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Popup
          title={`${titleForm(tableName)} Form`}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <FormService
            addOrEdit={addOrEdit}
            recordForEdit={recordForEdit}
            tableName={tableName} />
        </Popup>
      </ThemeProvider>
    </div>
  );
}


export default TableStructure;