import firebase from './firebase';
import * as ActionTypes from './ActionTypes';

const emptyRecord = () => ({
  id: null,
  title: '',
  description: '',
  mediaType: "image",
  createdDate: new Date(),
  preview: '',
  download: '',
  content: '',

});
const initialState = {
  firebase,
  dataTable: {
    ascending: true,
    orderBy: 'title',
    page: 0,
    rowsPerPage: 5,
    columns: [
      { id: 'title',  label: 'Title' },
      { id: 'description', label: 'Description' },
      { id: 'createdDate', label: 'Date Created' },
      { id: 'preview', label: 'Preview' },
      { id: 'download', label: 'Download' },
      { id: 'actions', label: 'Actions' }
    ]
  },
  dialog: {
    open: false,
    rowId: null,
    record: emptyRecord(),
    suggestions: []
  },
  data: [],
  loaded: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.LOAD_INITIAL_DATA: {
    return {
      ...state,
      data: action.data,
      loaded: action.loaded,
      loading: action.loading
    };
  }
  case ActionTypes.SEARCH_NASA_API: {
    return {
      ...state,
      dialog: {
        ...state.dialog,
        suggestions: action.suggestions
      }
    };
  }
  case ActionTypes.SELECT_ITEM_FROM_NASA: {
    console.log(action);
    return {
      ...state,
      dialog: {
        ...state.dialog,
        suggestions: [],
        record: action.record
      }
    }
  }
  case ActionTypes.SORT_ROWS: {
    return {
      ...state,
      data: action.data,
      dataTable: action.dataTable
    };
  }
  case ActionTypes.CHANGE_PAGE: {
    return {
      ...state,
      dataTable: {...state.dataTable, page: action.page}
    };
  }
  case ActionTypes.CHANGE_ROWS_PER_PAGE: {
    return {
      ...state,
      dataTable: {...state.dataTable,
                  rowsPerPage: action.rowsPerPage,
                  page: 0}
    };
  }
  case ActionTypes.TOGGLE_DIALOG: {
    return {
      ...state,
      dialog: {...state.dialog,
               open: !state.dialog.open,
               rowId: null,
               record: emptyRecord()}
    };
  }
  case ActionTypes.HANDLE_FORM_DATA: {
    let dialog = {...state.dialog};
    dialog.record[action.field] = action.value;
    return {
      ...state,
      dialog
    };
  }
  case ActionTypes.ADD_RECORD: {
    let record = emptyRecord();
    state.data.push(record);
    return {
      ...state,
      dialog: {open: true,
               rowId: state.data.length - 1,
               record}
      //using filter as splice change the array internally and react doesn't recognize as an update
    };
  }
  case ActionTypes.EDIT_RECORD: {
    return {
      ...state,
      dialog: {...state.dialog,
               rowId: action.rowId,
               record: action.record}
      //using filter as splice change the array internally and react doesn't recognize as an update
    };
  }
  case ActionTypes.DELETE_RECORD: {
    return {
      ...state
      // firebase autosync is responsible for deleting the record
      //data: state.data.filter((v, k) => k !== action.rowId)
      //using filter as splice change the array internally and react doesn't recognize as an update
    };
  }
  default:
    return state;
  };
};

export default reducer;
