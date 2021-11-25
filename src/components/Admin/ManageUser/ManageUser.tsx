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

function createData(
  fullname: string,
  phonenumber: string,
  username: string,
  active: number,
  typeofuser: number,
): DataTableUser {
  return {
    fullname,
    phonenumber,
    username,
    active,
    typeofuser,
  };
}

const rows = [
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat1', 1, 1),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat2', 1, 2),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat3', 0, 3),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat4', 0, 1),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat5', 1, 1),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat6', 0, 3),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat7', 1, 1),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat8', 0, 2),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat19', 0, 2),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat16', 0, 1),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat13', 1, 1),
  createData('Nguyễn Tấn Đạt', '0912562336', 'dat12', 1, 3),
];

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
    id: 'username',
    numeric: true,
    disablePadding: false,
    label: 'Tên đăng nhập',
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
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof DataTableUser>('fullname');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.username);
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
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleEditRow = (username: string) => {
    history.push(`/admin/manage-user/${username}`);
  };

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
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.username);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.username}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        onClick={(event) => handleClick(event, row.username)}
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.fullname}
                      </TableCell>
                      <TableCell align="right">{row.phonenumber}</TableCell>
                      <TableCell align="right">{row.username}</TableCell>
                      <TableCell align="right">
                        {row.active === 1 ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
                      </TableCell>
                      <TableCell align="right">
                        {row.typeofuser === 1
                          ? 'Người dùng'
                          : row.typeofuser === 2
                          ? 'Người bán'
                          : row.typeofuser === 3
                          ? 'Quản trị viên'
                          : ''}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEditRow(row.username)}
                        >
                          Chỉnh sửa
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
