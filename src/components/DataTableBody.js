import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const DataTableBody = ({data}) => (
  <TableBody>
              {data.map(n => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={n.id}
                    >
                    <TableCell component="th" scope="row" padding="none">
                      {n.title}
                    </TableCell>
                    <TableCell>{n.description}</TableCell>
                    <TableCell>{n.createdDate}</TableCell>
                    <TableCell>
                      <img style={{
                             width: "80px",
                             maxHeight: "80px"
                           }} src={n.preview} alt={n.title}/>
                    </TableCell>
                    <TableCell><a href={n.download}>Download</a></TableCell>
                    <TableCell><EditIcon /><DeleteIcon /></TableCell>

                  </TableRow>
                );
              })}
      </TableBody>);

DataTableBody.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default DataTableBody;
