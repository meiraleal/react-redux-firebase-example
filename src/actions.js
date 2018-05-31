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

export const toggleDialog = () => {
  return {
    type: ActionTypes.TOGGLE_DIALOG,
  };
};

export const handleFormData = (field, {target: {value}}) => {
  return {
    type: ActionTypes.HANDLE_FORM_DATA,
    field,
    value
  };
};

export const addRecord = () => {
  return (dispatch) => {
    dispatch(toggleDialog("add"));
    dispatch({type: ActionTypes.ADD_RECORD});
  };
};

export const saveRecord = () => {
  return (dispatch, getState) => {
    const state = getState();
    state.firebase.ref(`/${state.dialog.rowId}`).set(state.dialog.record);
    dispatch(toggleDialog());
    dispatch({
      type: ActionTypes.SAVE_RECORD,
      record: state.dialog.record
    });
  };
};

export const deleteRecord = (rowId) => {
  return {
    type: ActionTypes.DELETE_RECORD,
    rowId
  };
};

export const editRecord = (rowId, record) => {
  return (dispatch) => {
    dispatch(toggleDialog());
    dispatch({
      type: ActionTypes.EDIT_RECORD,
      rowId,
      record
    });
  };
};

const convertToCSV = (data) => {
  if(data.length === 0)
    return;
  let csv = Object.keys(data[0]).join(",");
  csv = csv + "\r\n" +
    data
    .map((row) =>
         Object.values(row).reduce((a, b) => `${a},"${b}"`))
    .join("\r\n");
  return csv;
};

const sendCSVToClient = (csv) => {
  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement("a");
  var url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "export.csv");
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportCSV = () => {
  return (dispatch, getState) => {
    let state = getState();
    let csv = convertToCSV(state.data);
    sendCSVToClient(csv);
    dispatch({
      type: ActionTypes.EXPORT_CSV
    });
  };
};
