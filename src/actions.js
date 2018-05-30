import * as ActionTypes from './ActionTypes';

export const handleRequestSort = (column) => {
  return (dispatch, getState) => {
    let { data, dataTable } = getState();
    dataTable.ascending = column === dataTable.orderBy && !dataTable.ascending; // changing direction of the sort
    dataTable.orderBy = column;
    // Use spread operator to create a copy of the array otherwise it only mutates the object and don't trigger a re-render
    data =
      dataTable.ascending === true
      ? [...data].sort((a, b) => (b[dataTable.orderBy] < a[dataTable.orderBy] ? -1 : 1))
    : [...data].sort((a, b) => (a[dataTable.orderBy] < b[dataTable.orderBy] ? -1 : 1));

    dispatch({
      type: ActionTypes.SORT_ROWS,
      data,
      dataTable
    });
  };
};

export const handleChangePage = (event, page) => {
  return (dispatch, getState) => {
    let { data, dataTable } = getState();

    dispatch({
      type: ActionTypes.CHANGE_PAGE,
      page
    });
  };
};

export const handleChangeRowsPerPage = event => {
  return {
    type: ActionTypes.CHANGE_ROWS_PER_PAGE,
    rowsPerPage: event.target.value
  };
};
