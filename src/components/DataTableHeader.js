import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

class DataTableHeader extends React.Component {
  createSortHandler = column => event => {
    this.props.handleRequestSort(column);
  };

  render() {
    const { ascending, orderBy, columns } = this.props;
    const direction = ascending ? "asc" : "desc";
    return (
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return (
              <TableCell
                key={column.id}
                sortDirection={orderBy === column.id ? direction : false}
                >
                <Tooltip
                  title="Sort"
                  enterDelay={300}
                  >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={direction}
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

DataTableHeader.propTypes = {
  handleRequestSort: PropTypes.func.isRequired,
  ascending: PropTypes.bool.isRequired,
  orderBy: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired
};

export default DataTableHeader;
