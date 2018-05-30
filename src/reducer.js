let counter = 0;
let nasaObj = {
  "date": "2018-05-29",
  "explanation": "How many of these can you find in today's featured photograph: an aurora, airglow, one of the oldest impact craters on the Earth, snow and ice, stars, city lights, and part of the International Space Station? Most of these can be identified by their distinctive colors. The aurora here appears green at the bottom, red at the top, and is visible across the left of image. Airglow appears orange and can be seen hovering over the curve of the Earth. The circular Manicouagan Crater in Canada, about 100 kilometers across and 200 million years old, is visible toward the lower right and is covered in white snow and ice.  Stars, light in color, dot the dark background of space. City lights appear a bright yellow and dot the landscape. Finally, across the top, part of the International Space Station (ISS) appears mostly tan. The featured image was taken from the ISS in 2012.",
  "hdurl": "https://apod.nasa.gov/apod/image/1805/AuroraCrater_ISS_4256.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Aurora and Manicouagan Crater from the Space Station",
  "url": "https://apod.nasa.gov/apod/image/1805/AuroraCrater_ISS_1080.jpg"
};

function createData(nasaObj) {
  counter += 1;
  return { id: counter,
           title: nasaObj.title,
           description: nasaObj.explanation,
           createdDate: nasaObj.date,
           preview: nasaObj.url,
           download: nasaObj.hdurl
         };
}

const initialState = {
  settings: {
    query: '',
    order: 'asc',
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
  data: [
    createData(nasaObj),
    createData(nasaObj),
    createData(nasaObj),
    createData(nasaObj),
    createData(nasaObj),
    createData(nasaObj)
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};
