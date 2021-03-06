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
import {
  useAppDispatch,
  useAppSelector,
  getCategoryProductByIDParentLevelOne,
  getCategoryProductByIDParentLevelTwo,
  getCategoryProductByLevelZero,
  doGetAllCategory,
  doGetSearchCategory,
} from '../../../redux';
import { Form } from 'react-bootstrap';
import { Button as Button2 } from 'react-bootstrap';
import { useDebounce } from '../../../hooks';
import './ManageCate.scss';
const headCells: readonly HeadCell[] = [
  {
    id: 'IDCategory',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'Name',
    numeric: false,
    disablePadding: true,
    label: 'Tên danh mục',
  },
  {
    id: 'ParentName',
    numeric: true,
    disablePadding: false,
    label: 'Danh mục cha',
  },
];

export const ManageCate = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof DataTableCategory>('IDCategory');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState(0);
  const debouncedSearchTerm = useDebounce(search, 500);

  const { listCategory } = useAppSelector((state) => state.categorySlice);

  React.useEffect(() => {
    // dispatch(getCategoryProductByLevelZero({ level: level }));
    dispatch(doGetAllCategory());
  }, []);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(doGetSearchCategory({ text: debouncedSearchTerm }));
    } else {
      dispatch(doGetAllCategory());
    }
  }, [debouncedSearchTerm]);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = listCategory.data?.map((n: any) => n.IDCategory);
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
  const emptyRows =
    page > 0 && listCategory && listCategory.data
      ? Math.max(0, (1 + page) * rowsPerPage - listCategory.length)
      : 0;

  const handleEditRow = (IDCategory: string) => {
    history.push(`/admin/category/${IDCategory}`);
  };

  return (
    <div className="category-manage">
      <Box sx={{ width: '100%', position: 'relative' }}>
        <Paper>
          <EnhancedTableToolbar
            numSelected={selected.length}
            title="Quản lý danh sách các danh mục"
          />
          {listCategory && listCategory.data ? (
            <>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={listCategory.data.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {listCategory.data &&
                      stableSort(listCategory.data, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        ?.map((row: any, index) => {
                          const isItemSelected = isSelected(row.IDCategory);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.IDCategory}
                              selected={isItemSelected}
                            >
                              <TableCell
                                padding="checkbox"
                                onClick={(event) => handleClick(event, row.IDCategory)}
                              >
                                {/* <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
                              /> */}
                              </TableCell>
                              <TableCell component="th" id={labelId} scope="row" padding="none">
                                {row.IDCategory}
                              </TableCell>
                              <TableCell align="left">{row.Name}</TableCell>
                              {/* <TableCell align="left">{parseInt(row.Level) + 1}</TableCell> */}
                              <TableCell align="left">{row?.ParentName}</TableCell>
                              <TableCell>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleEditRow(row.IDCategory)}
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
                count={listCategory.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />{' '}
            </>
          ) : (
            <></>
          )}
        </Paper>

        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            top: 20,
            right: 20,
            width: '500px',
          }}
        >
          <Form.Control
            style={{ width: '300px', marginRight: '10px' }}
            type="text"
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="Tìm kiếm"
          />
          <Button2
            onClick={() => history.push('/admin/category/0')}
            style={{ marginRight: '10px' }}
            variant="success"
          >
            Thêm danh mục
          </Button2>
          {/* <Form.Select
          style={{ width: '300px' }}
          aria-label="Chọn cấp của danh mục"
          onChange={handleOnChangeSelect}
        >
          <option value="0">Danh mục cấp 1</option>
          <option value="1">Danh mục cấp 2</option>
          <option value="2">Danh mục cấp 3</option>
        </Form.Select> */}
        </div>
      </Box>

      {!listCategory ||
        (!listCategory.length && (
          <div className="category-manage__empty">
            <p>Không có danh mục phù hợp</p>
          </div>
        ))}
    </div>
  );
};
