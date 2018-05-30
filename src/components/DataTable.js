import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DataTableHeader from './DataTableHeader';
import DataTableFooter from './DataTableFooter';

class DataTable extends React.Component {
  render() {
    const {
      data,
      settings: {page, rowsPerPage, query, order, orderBy, columns},
      handleRequestSort,
      handleChangePage,
      handleChangeRowsPerPage
    } = this.props;

    return (
      <Paper>
        <div>
          <Table aria-labelledby="tableTitle">
            <DataTableHeader
              order={order}
              orderBy={orderBy}
              handleRequestSort={handleRequestSort}
              columns={columns}
              />
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
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
      </TableBody>
        </Table>
        </div>
        <DataTableFooter page={page}
      numRows={data.length}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </Paper>
    );
  }
}

DataTable.propTypes = {
  settings: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired
};

export default DataTable;
