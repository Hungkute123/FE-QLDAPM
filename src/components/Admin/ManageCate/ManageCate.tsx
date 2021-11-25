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
  cate_id: string,
  cate_name: string,
  cate_level: string,
  cate_parent: string,
): DataTableCategory {
  return {
    cate_id,
    cate_name,
    cate_level,
    cate_parent,
  };
}

const rows = [
  createData('1', 'Nguyễn Tấn Đạt', '1', 'dat1'),
  createData('2', 'Nguyễn Tấn Đạt', '1', 'dat1'),
  createData('3', 'Nguyễn Tấn Đạt', '2', 'dat1'),
  createData('4', 'Nguyễn Tấn Đạt', '1', 'dat1'),
  createData('5', 'Nguyễn Tấn Đạt', '3', 'dat1'),
];

const headCells: readonly HeadCell[] = [
  {
    id: 'cate_id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'cate_name',
    numeric: false,
    disablePadding: true,
    label: 'Tên danh mục',
  },
  {
    id: 'cate_level',
    numeric: true,
    disablePadding: false,
    label: 'Cấp danh mục',
  },
  {
    id: 'cate_parent',
    numeric: true,
    disablePadding: false,
    label: 'Danh mục cha',
  },
];

export const ManageCate = () => {
  const history = useHistory();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof DataTableCategory>('cate_id');
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
      const newSelecteds = rows.map((n) => n.cate_id);
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
        <EnhancedTableToolbar
          numSelected={selected.length}
          title="Quản lý danh sách các danh mục"
        />
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
                  const isItemSelected = isSelected(row.cate_id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.cate_id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        onClick={(event) => handleClick(event, row.cate_id)}
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
                        {row.cate_id}
                      </TableCell>
                      <TableCell align="right">{row.cate_name}</TableCell>
                      <TableCell align="right">{row.cate_level}</TableCell>
                      <TableCell align="right">{row.cate_parent}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEditRow(row.cate_id)}
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
