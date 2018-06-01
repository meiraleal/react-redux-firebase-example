import * as ActionTypes from './ActionTypes';

export const loadInitialData = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.LOAD_INITIAL_DATA,
      loaded: false,
      loading: true,
      data: []
    });
    const {firebase} = getState();
    firebase.ref("/records")
      .on("value",
          (snapshot) => {
            const  records = snapshot.val();
            const data = Object.keys(records).map((rowId) => {
              records[rowId].id = rowId;
              return records[rowId];
            });
            dispatch({
              type: ActionTypes.LOAD_INITIAL_DATA,
              loaded: true,
              loading: false,
              data
            });
          },
          (error) => alert("Error:" + error.code));
  };
};

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
  return {
    type: ActionTypes.CHANGE_PAGE,
    page
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
    var {firebase, dialog: {record}} = getState();
    try {
      if(record.id)
        firebase.ref(`/records/${record.id}`).set(record);
      else {
        let newRecord = firebase.ref("/records").push();
        record.id = newRecord.key;
        record.createdDate = new Date().getTime();
        console.log(record);
        newRecord.set(record);
      }
    }
    catch(e) {
      alert(e);
    }
    finally {
      dispatch(toggleDialog());
      dispatch({
        type: ActionTypes.SAVE_RECORD,
        record
      });
    }
  };
};

export const deleteRecord = (rowId, firebaseId) => {
  return (dispatch, getState) => {
    var {firebase} = getState();
    try {
      firebase.ref("/records").child(firebaseId).remove();
    }
    catch(e) {
      alert(e);
    }
    finally {
      dispatch({
        type: ActionTypes.DELETE_RECORD,
        rowId
      });
    }
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
    return alert("Insert at least one row to export CSV.");
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
    try {
      let csv = convertToCSV(state.data);
      if(csv) {
        sendCSVToClient(csv);
      }
    }
    catch(e) {
      alert(e);
    }
    finally {
      dispatch({
        type: ActionTypes.EXPORT_CSV
      });
    }
  };
};
