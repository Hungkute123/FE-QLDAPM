import * as React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from '@material-ui/core';
import { getComparator, stableSort, EnhancedTableToolbar, EnhancedTableHead } from '../';
import { useHistory } from 'react-router';
import { useAppDispatch, doGetAllUser, useAppSelector, doChangeActiveUser } from '../../../redux';

const headCells: readonly HeadCell[] = [
  {
    id: 'fullname',
    numeric: false,
    disablePadding: true,
    label: 'Họ và tên',
  },
  {
    id: 'phonenumber',
    numeric: true,
    disablePadding: false,
    label: 'Số điện thoại',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'active',
    numeric: true,
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    id: 'typeofuser',
    numeric: true,
    disablePadding: false,
    label: 'Loại người dùng',
  },
];

export const ManageUser = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof DataTableUser>('fullname');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { listUser } = useAppSelector((state) => state.userSlice);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = listUser.map((n) => n.userid);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listUser.length) : 0;

  const handleEditRow = (active: number, userid: string) => {
    dispatch(doChangeActiveUser({ active: active, userid: userid }));
  };

  React.useEffect(() => {
    dispatch(doGetAllUser());
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper>
        <EnhancedTableToolbar numSelected={selected.length} title="Quản lý tài khoản người dùng" />
        <TableContainer>
          <Table>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={listUser.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(listUser, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index) => {
                  const isItemSelected = isSelected(row.userid);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.userid}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        onClick={(event) => handleClick(event, row.userid)}
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.firstname && row.lastname ? row.firstname + ' ' + row.lastname : ''}
                      </TableCell>
                      <TableCell align="left">{row.phonenumber}</TableCell>

                      <TableCell style={{ minWidth: '150px' }} align="left">
                        {row.active ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
                      </TableCell>
                      <TableCell align="left">
                        {row.typeofuser === 0
                          ? 'Người dùng'
                          : row.typeofuser === 1
                          ? 'Người bán'
                          : row.typeofuser === 2
                          ? 'Quản trị viên'
                          : ''}
                      </TableCell>
                      <TableCell style={{ minWidth: '200px' }}>
                        <Button
                          variant="contained"
                          color={row.active ? 'inherit' : 'primary'}
                          onClick={() => handleEditRow(row.active, row.userid)}
                        >
                          {row.active ? 'Hủy kích hoạt' : 'Kích hoạt'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={listUser.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
