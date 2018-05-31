import firebase from './firebase';
import * as ActionTypes from './ActionTypes';

let nasaObj = {
  "date": "2018-05-29",
  "explanation": "How many of these can you find in today's featured photoograph: an aurora, airglow, one of the oldest impact craters on the Earth, snow and ice, stars, city lights, and part of the International Space Station? Most of these can be identified by their distinctive colors.",
  "hdurl": "https://apod.nasa.gov/apod/image/1805/AuroraCrater_ISS_4256.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Aurora and Manicouagan Crater from the Space Station",
  "url": "https://apod.nasa.gov/apod/image/1805/AuroraCrater_ISS_1080.jpg"
};

function createData(nasaObj, title) {
  return { title: title,
           description: nasaObj.explanation,
           createdDate: new Date(nasaObj.date),
           mediaType: "image",
           preview: nasaObj.url,
           download: nasaObj.hdurl
         };
}

const emptyRecord = () => ({
  mediaType: "image",
  title: '',
  description: '',
  createdDate: new Date()
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
    record: emptyRecord()
  },
  data: [
    createData(nasaObj, "1 Teste"),
    createData(nasaObj, "das tesdas"),
    createData(nasaObj, "TItulo Piorado")
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
      ...state,
      data: state.data.filter((v, k) => k !== action.rowId)
      //using filter as splice change the array internally and react doesn't recognize as an update
    };
  }
  default:
    return state;
  };
};

export default reducer;
