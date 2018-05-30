import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

class DataTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.handleRequestSort(event, property);
  };

  render() {
    const { order, orderBy, columns } = this.props;
    return (
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? order : false}
                >
                <Tooltip
                  title="Sort"
                  enterDelay={300}
                  >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                    >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
      </TableRow>
        </TableHead>
    );
  }
}

DataTableHead.propTypes = {
  handleRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired
};

export default DataTableHead;
