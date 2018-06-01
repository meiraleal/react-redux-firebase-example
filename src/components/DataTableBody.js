import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const DataTableBody = (props) => (
  <TableBody>
    {props.data.map((row, key) => {
      return (
        <TableRow
          hover
          tabIndex={-1}
          key={key}
          >
          <TableCell component="th" scope="row" padding="none">
            {row.title}
          </TableCell>
          <TableCell>{row.description}</TableCell>
          <TableCell>{!isNaN(row.createdDate) && new Date(row.createdDate).toLocaleDateString()}</TableCell>
          <TableCell>
            <img style={{
                   width: "80px",
                   maxHeight: "80px"
                 }} src={row.preview} alt={row.title}/>
          </TableCell>
          <TableCell><a href={row.download}>Download</a></TableCell>
          <TableCell>
            <EditIcon  style={{cursor: 'pointer'}} onClick={() => props.editRecord(key, row)} />
              <DeleteIcon style={{cursor: 'pointer'}} onClick={() => props.deleteRecord(key, row.id)} />
          </TableCell>

        </TableRow>
      );
    })}
  </TableBody>);

DataTableBody.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  editRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};

export default DataTableBody;
